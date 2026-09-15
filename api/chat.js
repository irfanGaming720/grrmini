import { search } from 'duck-duck-scrape';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Method not allowed' });
  }

  const { contents, prompt, apiKey: userKey } = req.body || {};
  const apiKey = userKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ reply: 'API Key wajib diisi! Masukkan key di menu atas.' });
  }

  let finalContents = contents;
  if (!finalContents || !Array.isArray(finalContents) || finalContents.length === 0) {
    if (!prompt) {
      return res.status(400).json({ reply: 'Pesan tidak boleh kosong.' });
    }
    finalContents = [{ role: 'user', parts: [{ text: prompt }] }];
  }

  // 1. Ambil pertanyaan terakhir user untuk bahan browsing DuckDuckGo
  const lastUserMsg = finalContents[finalContents.length - 1]?.parts?.[0]?.text || '';
  let searchContext = '';

  try {
    const searchResults = await search(lastUserMsg, { safeSearch: 0 });
    if (searchResults.results && searchResults.results.length > 0) {
      // Ambil 3 snippet teratas
      const top3 = searchResults.results.slice(0, 3).map(r => `- ${r.title}: ${r.snippet}`);
      searchContext = top3.join('\n');
    }
  } catch (err) {
    // Abaikan jika DuckDuckGo timeout/gagal, AI tetap jawab via basis datanya
  }

  try {
    const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

    // 2. Suntikkan hasil DuckDuckGo ke instruksi sistem
    const sysPrompt = `Kamu adalah asisten AI yang cerdas, ramah, dan solutif. Jawab to the point dan terstruktur rapi.
${searchContext ? `Berikut referensi hasil penelusuran web DuckDuckGo terkait:\n${searchContext}\nGunakan data di atas jika relevan.` : ''}`;

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