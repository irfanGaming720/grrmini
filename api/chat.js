export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Method not allowed' });
  }

  const { contents, prompt, apiKey: userKey, tavilyKey: userTavilyKey, useWeb } = req.body || {};
  const apiKey = userKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ reply: 'API Key wajib diisi! Masukkan key di menu Keys.' });
  }

  let finalContents = contents;
  if (!finalContents || !Array.isArray(finalContents) || finalContents.length === 0) {
    if (!prompt) {
      return res.status(400).json({ reply: 'Pesan tidak boleh kosong.' });
    }
    finalContents = [{ role: 'user', parts: [{ text: prompt }] }];
  }

  // Waktu sistem Jakarta (WIB / UTC+7)
  const timeWIB = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(new Date());

  const lastUserMsg = finalContents[finalContents.length - 1]?.parts?.[0]?.text || '';
  let searchContext = '';

  // Penelusuran web via Tavily jika toggle aktif (dengan mekanisme rotasi multi-key)
  if (useWeb) {
    const rawTavily = userTavilyKey || process.env.TAVILY_API_KEY || '';
    const tavilyKeys = rawTavily.split('\n').map(k => k.trim()).filter(Boolean);

    if (tavilyKeys.length === 0) {
      return res.status(400).json({ reply: 'Fitur Web aktif, tapi Tavily API Key belum diisi di menu Keys!' });
    }

    let tavilySuccess = false;
    let lastTavilyError = '';

    for (let i = 0; i < tavilyKeys.length; i++) {
      const currentTKey = tavilyKeys[i];
      try {
        const tavilyRes = await fetch('https://api.tavily.com/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            api_key: currentTKey,
            query: lastUserMsg,
            search_depth: 'basic',
            max_results: 3
          })
        });

        const tavilyData = await tavilyRes.json().catch(() => ({}));

        if (tavilyRes.ok && !tavilyData.error) {
          if (tavilyData.results && tavilyData.results.length > 0) {
            searchContext = tavilyData.results
              .map(r => `- ${r.title}: ${r.content}`)
              .join('\n');
          } else {
            searchContext = 'Tidak ditemukan hasil pencarian web yang relevan.';
          }
          tavilySuccess = true;
          break; // Berhasil, keluar dari loop
        } else {
          lastTavilyError = tavilyData.error || `Tavily status ${tavilyRes.status}`;
        }
      } catch (err) {
        lastTavilyError = err.message;
      }
    }

    if (!tavilySuccess) {
      return res.status(502).json({ reply: `Semua Tavily API Key limit/gagal: ${lastTavilyError}` });
    }
  }

  try {
    const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

    const sysPrompt = `Kamu adalah asisten AI yang cerdas, ramah, dan solutif. Jawab to the point dan terstruktur rapi.
WAKTU SISTEM SAAT INI: ${timeWIB}. Gunakan data waktu ini bila ditanya hari, tanggal, jam, atau tahun saat ini.
${searchContext ? `\nINFORMASI DARI WEB TAVILY:\n${searchContext}\nGunakan informasi di atas untuk menjawab hal-hal terkini atau faktual. Jangan katakan bahwa kamu tidak bisa mengakses internet jika informasi di atas sudah tersedia.` : ''}`;

    const googleRes = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: sysPrompt }]
        },
        contents: finalContents
      })
    });

    const data = await googleRes.json().catch(() => ({}));

    if (!googleRes.ok || data.error) {
      const message = data.error?.message || `Google API mengembalikan status ${googleRes.status}.`;
      return res.status(googleRes.status || 502).json({ reply: `Google API Error: ${message}` });
    }

    const candidate = data.candidates?.[0];
    let replyText = candidate?.content?.parts?.[0]?.text;

    if (!replyText) {
      if (candidate?.finishReason && candidate.finishReason !== 'STOP') {
        replyText = `Respons terhenti (Status: ${candidate.finishReason}).`;
      } else {
        replyText = 'Tidak ada respons teks dari model.';
      }
    }

    return res.status(200).json({ reply: replyText });

  } catch (err) {
    return res.status(500).json({ reply: 'Relay server error: ' + err.message });
  }
}