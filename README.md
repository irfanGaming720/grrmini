<div align="center">
<img src="https://raw.githubusercontent.com/irfanGaming720/grrmini/main/public/apple-touch-icon.png" alt="Grrmini Logo" width="100" style="border-radius: 20px;" />
# ✦ Grrmini ✦

**Ultra-Lightweight Gemini AI Web Client — Zero Frontend Dependencies, Legacy Browser Ready, Serverless Relay.**

[![Hosted on Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://grrmini.vercel.app)
[![Website](https://img.shields.io/badge/Website-grrmini.vercel.app-4e8cff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://grrmini.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gemini 3.6 Flash](https://img.shields.io/badge/Google%20Gemini-3.6%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![Tavily Search](https://img.shields.io/badge/Search-Tavily%20API-00C7B7?style=for-the-badge&logo=tavily&logoColor=white)](https://tavily.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

### 🌐 Tautan Web App: [grrmini.vercel.app](https://grrmini.vercel.app)

<p align="center">
  <a href="#-gambaran-umum">Gambaran Umum</a> •
  <a href="#-fitur-unggulan">Fitur Unggulan</a> •
  <a href="#-arsitektur--alur-kerja">Arsitektur</a> •
  <a href="#-panduan-mendapatkan-api-key">Dapatkan API Key</a> •
  <a href="#-panduan-penggunaan">Cara Pakai</a> •
  <a href="#-panduan-deploy-ke-vercel">Deploy ke Vercel</a> •
  <a href="#-lisensi">Lisensi</a>
</p>

---

</div>

## 📖 Gambaran Umum

**Grrmini** adalah klien web kecerdasan buatan (*AI chat client*) mandiri berbasis Google Gemini yang dirancang **murni dengan Vanilla HTML5, CSS3, dan JavaScript standar** tanpa dependensi pustaka luar, framework modern (React/Vue/Angular), maupun *bundler/build-tools* yang berat.

Project ini di-deploy di **[Vercel](https://grrmini.vercel.app)** dan dibangun dengan filosofi **efisiensi ekstrem serta aksesibilitas maksimal**:
- **Dukungan Perangkat Lawas (*Legacy-Friendly*)**: Didesain secara spesifik dan ergonomis untuk perangkat berspesifikasi minim serta peramban web lawas berlayar rasio kotak **1:1 (720x720 piksel)** seperti **BlackBerry Q10**, BlackBerry Passport, maupun ponsel keypad/touchscreen modern.
- **Zero Frontend Dependencies & Serverless Relay**: Antarmuka murni HTML/CSS/JS tanpa library berat. Komunikasi ke API pihak ketiga diakomodasi melalui Vercel Serverless Function (`api/chat.js`) sebagai perantara (*relay*) yang aman, menghindari kendala CORS pada peramban jadul, serta menjaga performa tetap gesit.
- **Hosted on Vercel**: Dapat langsung diakses secara publik di **[grrmini.vercel.app](https://grrmini.vercel.app)** dengan kecepatan jaringan Edge CDN global Vercel dan ketersediaan tinggi (*high availability*).

---

## ⚡ Fitur Unggulan

| Fitur | Deskripsi |
| :--- | :--- |
| 🚀 **Hosted on Vercel & Fast CDN** | Berjalan mulus di edge network Vercel melalui domain **[grrmini.vercel.app](https://grrmini.vercel.app)** dengan waktu pemuatan (*loading time*) mendekati instan. |
| ⚡ **Zero Frontend Dependencies & Relay** | Frontend seringan bulu tanpa bundle npm, dipadukan dengan Vercel Serverless Function (`api/chat.js`) sebagai relay yang aman dan bebas kendala CORS pada browser lawas. |
| 🪶 **Ultra-Lightweight & Legacy-Friendly** | Tanpa React, Tailwind, ataupun Marked.js. Menggunakan **Custom Regex Markdown Parser** internal yang enteng untuk merender teks tebal/miring, kutipan (*blockquote*), daftar poin (*lists*), dan tabel data responsif. |
| 🕒 **Auto WIB Time Injection** | Menghitung dan menyuntikkan waktu lokal Jakarta (**WIB / UTC+7**) secara otomatis ke dalam *system instruction*. AI selalu memahami konteks hari, tanggal, bulan, tahun, dan jam saat ini tanpa memboroskan kuota pencarian web. |
| 🔄 **Smart Multi-Key Failover (Rerolling)** | Anti gangguan akibat *rate limit* (HTTP 429) atau kuota harian habis. Mendukung pengisian banyak Gemini API Key dan Tavily API Key (satu baris per key). Sistem otomatis merotasi ke key berikutnya tanpa memutus obrolan. |
| 🔍 **Web Browsing Toggle (Tavily)** | Akses penelusuran informasi faktual real-time dari internet melalui Tavily Search API. Cukup aktifkan/nonaktifkan lewat satu sentuhan pada checkbox. |
| ⭐ **Penyimpanan Chat Favorit** | Simpan riwayat jawaban penting ke `localStorage`. Dilengkapi tombol hapus dengan sistem **jeda konfirmasi 1,5 detik (*anti-accidental click safeguard*)** agar riwayat tidak sengaja terhapus di layar kecil. |
| ⌨️ **Navigasi Keyboard & Trackpad Ergonomis** | Mendukung tombol `Enter` untuk mengirim pesan, tombol cepat **Reset** sesi, serta palet warna *dark mode* modern bernuansa abu gelap hemat daya layar OLED/AMOLED. |

---

## 🏗️ Arsitektur & Alur Kerja

Grrmini memadukan antarmuka peramban yang ultra-ringan dengan fungsi serverless Vercel (`api/chat.js`) sebagai jembatan relay untuk menghindari limitasi CORS dan menjamin kompatibilitas peramban lawas:

```text
[ Input Pengguna ] ──► [ Vercel Serverless Relay (api/chat) ]
                            ├── Injeksi Jam Jakarta (WIB)
                            ├── Rotasi Tavily Search (Jika Toggle Aktif)
                            └── Request ke Gemini 3.6 Flash (Failover Loop)
                                      │
                                      ▼
                      [ Kirim Balasan ke Browser BlackBerry ]
```

---

## 🔑 Panduan Mendapatkan API Key (Gratis)

Grrmini membutuhkan setidaknya satu **Google Gemini API Key**. Untuk fitur pencarian web real-time, Anda dapat melengkapinya dengan **Tavily Search API Key**. Keduanya menyediakan paket kuota gratis (*free tier*):

### 1. Mendapatkan Google Gemini API Key (Gratis)
1. Kunjungi portal **[Google AI Studio](https://aistudio.google.com/)**.
2. Masuk menggunakan akun Google Anda.
3. Klik menu **Get API key** di bilah navigasi sebelah kiri.
4. Klik **Create API key** (pilih project Google Cloud yang tersedia atau buat baru).
5. Salin token API yang berawalan `AIzaSy...`.
6. *(Tips)*: Anda dapat membuat 2–3 API key berbeda untuk memanfaatkan fitur multi-key rerolling otomatis di Grrmini.

### 2. Mendapatkan Tavily Search API Key (Gratis)
1. Kunjungi situs resmi **[Tavily AI](https://tavily.com/)**.
2. Klik **Sign Up** untuk membuat akun gratis (*Free tier* mencakup **1.000 pencarian/bulan**).
3. Masuk ke halaman **Dashboard**.
4. Salin API key yang berawalan `tvly-...`.

---

## 🚀 Panduan Penggunaan

### 1. Membuka Aplikasi
Akses web app langsung melalui peramban:  
👉 **[https://grrmini.vercel.app](https://grrmini.vercel.app)**

Saat pertama kali dibuka, panel pengaturan kunci (*Keys*) akan otomatis terbuka meminta konfigurasi API key awal.

### 2. Memasukkan Multi-Key (Menu "Keys")
Klik tombol **Keys** pada bilah menu atas:

```text
┌────────────────────────────────────────────────────────┐
│ Gemini API Keys (1 per baris):                         │
│ AIzaSyA1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           │
│ AIzaSyB2yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy           │
│ AIzaSyC3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz           │
│                                                        │
│ Tavily API Keys (1 per baris untuk rotasi):            │
│ tvly-dev-Axxxxxxxxxxxxxxxxxxxx                         │
│ tvly-dev-Byyyyyyyyyyyyyyyyyyyy                         │
│                                                        │
│                        [ Simpan Pengaturan ]           │
└────────────────────────────────────────────────────────┘
```
- **Gemini API Keys**: Masukkan satu atau lebih key, pisahkan setiap key dengan baris baru (*Enter*).
- **Tavily API Keys**: Masukkan key Tavily Anda (juga mendukung banyak baris untuk rotasi otomatis).
- Klik **Simpan Pengaturan**. Seluruh key tersimpan secara privat di `localStorage` peramban Anda dan tidak pernah disimpan di server pihak ketiga mana pun.

### 3. Menggunakan Web Browsing (Tavily)
- Beri tanda centang pada checkbox **Web Browsing (Tavily)** bila ingin menanyakan info terkini (berita hari ini, skor pertandingan, cuaca, harga terkini).
- Hilangkan centang untuk obrolan umum, brainstorming, atau coding agar kuota pencarian web tetap hemat.

### 4. Menyimpan & Menghapus Chat Favorit
- Klik tombol **☆ Simpan** di sudut kanan gelembung balasan AI untuk menyimpan obrolan penting.
- Buka daftar simpanan kapan saja dengan menekan tombol **Favorit** di header.
- **Jeda Proteksi 1,5 Detik**: Untuk mencegah salah pencet di layar sentuh perangkat mini, tombol **Hapus** memerlukan jeda 1,5 detik (`Yakin? 1.5s` ➔ `Hapus Sekarang`) sebelum data benar-benar dihapus dari `localStorage`.

### 5. Memulai Sesi Baru
Tekan tombol **Reset** di navigasi atas untuk menghapus obrolan pada layar dan memulai sesi percakapan baru yang segar dengan sapaan ramah sesuai waktu (Pagi/Siang/Sore/Malam).

---

## 🌐 Panduan Deploy ke Vercel

Jika Anda ingin men-deploy project ini ke akun Vercel Anda sendiri:

### Metode 1: Lewat Dashboard Vercel (Rekomendasi)
1. Buka [Vercel Dashboard](https://vercel.com/) dan lakukan login.
2. Klik tombol **Add New** ➔ **Project**.
3. Hubungkan akun GitHub Anda dan pilih repositori `grrmini`.
4. Di bagian pengaturan konfigurasi:
   - **Framework Preset**: Pilih `Other`.
   - **Root Directory**: `./` (default).
5. Klik **Deploy**. Vercel akan otomatis mendistribusikan aplikasi web Anda ke domain `*.vercel.app`.

### Metode 2: Menggunakan Vercel CLI
```bash
# Pasang Vercel CLI (jika belum ada)
npm i -g vercel

# Masuk ke direktori project
cd grrmini

# Jalankan deploy
vercel
```

---

## 📱 Kompatibilitas Perangkat

Grrmini telah diuji dan dioptimalkan secara mendalam untuk:
- 📱 **BlackBerry 10 OS** (BlackBerry Q10) via BlackBerry Native Browser (rasio layar 1:1).
- 💻 **Desktop & Smartphone Modern** (Chrome, Firefox, Safari, Edge, Opera, Kiwi, Brave).

---

## 🛠️ Tech Stack Detail

| Lapisan | Teknologi | Peran & Deskripsi |
| :--- | :--- | :--- |
| **Markah & Struktur** | HTML5 Semantik | Tag standar tanpa pustaka UI eksternal, hemat memori. |
| **Gaya & Desain** | CSS3 Murni | Tampilan responsif Flexbox, ramah viewport kecil, tema gelap hemat daya (*OLED friendly*). |
| **Logika Frontend** | Vanilla JavaScript (ES5/ES6) | Menggunakan objek native `XMLHttpRequest` dan `localStorage` tanpa dependensi runtime npm. |
| **Backend Relay** | Vercel Serverless Function (`api/chat.js`) | Perantara aman komunikasi API untuk menghindari limitasi CORS pada peramban jadul. |
| **Model AI** | Google Gemini 3.6 Flash | Endpoint resmi `generateContent` via Google Generative Language API v1beta. |
| **Pencarian Web** | Tavily REST API | Integrasi pencarian web AI berbobot ringkas untuk konteks real-time. |
| **Hosting & Platform** | Vercel | CDN global di **[grrmini.vercel.app](https://grrmini.vercel.app)**. |
| **Penyimpanan** | Browser LocalStorage | Menyimpan API keys dan daftar chat favorit secara privat di sisi pengguna. |

---

## 📄 Lisensi

Project ini dirilis di bawah lisensi [MIT License](LICENSE). Anda bebas menggunakan, memodifikasi, dan mendistribusikan ulang kode ini untuk keperluan personal maupun komersial.

```text
MIT License

Copyright (c) 2026 Grrmini Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk para pecinta handphone jadoel dan AI Gemini.</sub><br/>
  <sub>Kunjungi: <a href="https://grrmini.vercel.app">grrmini.vercel.app</a></sub>
</div>
