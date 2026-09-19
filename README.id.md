<div align="center">

**[English](README.md)** | **Bahasa Indonesia**

<br/>
<br/>

<img src="https://raw.githubusercontent.com/irfanGaming720/grrmini/main/public/apple-touch-icon.png" alt="Grrmini Logo" width="160" style="border-radius: 28px; margin-bottom: 12px;" />

# ✦ Grrmini ✦

**Web Client Gemini AI Super Ringan — Tanpa Dependensi Frontend, Siap untuk Browser Jadul, Didukung Serverless Relay.**

[![Hosted on Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://grrmini.vercel.app)
[![Website](https://img.shields.io/badge/Website-grrmini.vercel.app-4e8cff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://grrmini.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gemini 3.6 Flash](https://img.shields.io/badge/Google%20Gemini-3.6%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![Tavily Search](https://img.shields.io/badge/Search-Tavily%20API-00C7B7?style=for-the-badge&logo=tavily&logoColor=white)](https://tavily.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Views](https://komarev.com/ghpvc/?username=irfanGaming720&repo=grrmini&label=VIEWS&style=for-the-badge&color=4285f4)](https://github.com/irfanGaming720/grrmini)

<br/>

### 🌐 Akses Web App: [grrmini.vercel.app](https://grrmini.vercel.app)

<p align="center">
  <a href="#-gambaran-umum">Gambaran Umum</a> •
  <a href="#-fitur-unggulan">Fitur Unggulan</a> •
  <a href="#-arsitektur--alur-kerja">Arsitektur</a> •
  <a href="#-cara-dapat-api-key-gratis">Dapatkan API Key</a> •
  <a href="#-cara-pakai">Cara Pakai</a> •
  <a href="#-deploy-ke-vercel">Deploy ke Vercel</a> •
  <a href="#-lisensi">Lisensi</a>
</p>

---

</div>

## 📖 Gambaran Umum

**Grrmini** adalah klien web AI berbasis Google Gemini yang dibangun murni menggunakan **Vanilla HTML5, CSS3, dan JavaScript standar**. Dibuat seringkas mungkin tanpa framework modern (React/Vue), tanpa Tailwind, dan tanpa bundler yang bikin berat.

Aplikasi ini di-deploy di **[Vercel](https://grrmini.vercel.app)** dengan fokus utama pada **efisiensi tinggi dan ramah perangkat lawas**:
- **Optimal untuk Perangkat Jadul (*Legacy-Friendly*)**: Didesain khusus agar nyaman dibuka di browser lawas dan pas di layar rasio kotak **1:1 (720x720 piksel)** seperti **BlackBerry Q10**, ponsel tombol QWERTY, maupun smartphone modern.
- **Bebas Dependensi & Menggunakan Serverless Relay**: Frontend berjalan ringan memakai manipulasi DOM manual dan `XMLHttpRequest`. Permintaan API ditangani oleh Vercel Serverless Function (`api/chat.js`) sebagai perantara (*relay*) agar terbebas dari masalah CORS di browser lama sekaligus menjaga keamanan komunikasi data.
- **Tersedia Publik di Vercel**: Bisa langsung dicoba lewat **[grrmini.vercel.app](https://grrmini.vercel.app)** dengan kecepatan Edge CDN Vercel yang stabil.

---

## ⚡ Fitur Unggulan

| Fitur | Penjelasan |
| :--- | :--- |
| 🚀 **Hosted di Vercel & Fast CDN** | Akses cepat lewat domain **[grrmini.vercel.app](https://grrmini.vercel.app)** dengan loading awal yang nyaris instan. |
| ⚡ **Nol Dependensi Frontend & Relay Aman** | Frontend murni tanpa modul npm yang berat, dipadukan fungsi serverless (`api/chat.js`) untuk memotong kendala CORS di browser jadul. |
| 🪶 **Sangat Ringan & Ramah Browser Lawas** | Tanpa Marked.js. Dilengkapi **Custom Regex Markdown Parser** bawaan untuk menampilkan teks tebal/miring, kutipan (*blockquote*), daftar poin (*lists*), dan tabel data responsif. |
| 🕒 **Otomatis Tahu Waktu WIB** | Menyuntikkan waktu Jakarta (**WIB / UTC+7**) secara otomatis ke instruksi sistem AI. Model langsung paham hari, tanggal, dan jam terkini tanpa perlu membuang kuota pencarian web. |
| 🔄 **Rotasi Kunci Otomatis (Multi-Key Failover)** | Anti macet saat kena batas kuota (*rate limit* / HTTP 429). Kamu bisa memasukkan beberapa API Key Gemini dan Tavily sekaligus (satu per baris). Sistem otomatis beralih ke kunci cadangan kalau kunci utama limit. |
| 🔍 **Saklar Web Browsing (Tavily)** | Cari fakta dan info terkini dari internet lewat integrasi Tavily Search API. Cukup centang atau hilangkan centang pada toggle sesuai kebutuhan. |
| ⭐ **Simpan Chat Favorit** | Simpan jawaban penting ke `localStorage` browser. Ada proteksi jeda tombol hapus **1,5 detik (*anti-accidental click*)** biar riwayat nggak gampang terhapus saat layar kecil tersenggol. |
| ⌨️ **Nyaman Pakai Keyboard Fisik** | Kirim pesan cepat pakai tombol `Enter`, tombol **Reset** sesi sekali klik, dan tema gelap (*dark mode*) yang hemat daya di layar OLED/AMOLED. |

---

## 🏗️ Arsitektur & Alur Kerja

Grrmini menghubungkan antarmuka web yang ringan ke backend serverless Vercel (`api/chat.js`) sebagai perantara:

```text
[ Input Pesan dari User ] ──► [ Vercel Serverless Relay (api/chat) ]
                                   ├── Injeksi Jam Lokal Jakarta (WIB)
                                   ├── Rotasi Pencarian Tavily (Jika Web Aktif)
                                   └── Request ke Gemini 3.6 Flash (Rotasi Failover)
                                             │
                                             ▼
                             [ Kirim Balasan ke Browser HP / BlackBerry ]
                                             │
                                             ▼
                             [ Render Markdown & Opsi Simpan Favorit ]
```

---

## 🔑 Cara Dapat API Key Gratis

Grrmini minimal membutuhkan satu **Google Gemini API Key**. Kalau ingin menyalakan fitur pencarian web, kamu juga bisa menambahkan **Tavily Search API Key**. Keduanya menyediakan kuota gratis tanpa kartu kredit:

### 1. Mendapatkan Google Gemini API Key
1. Buka situs **[Google AI Studio](https://aistudio.google.com/)**.
2. Login menggunakan akun Google.
3. Klik menu **Get API key** di bilah navigasi kiri.
4. Klik **Create API key** (bisa buat di project baru atau yang sudah ada).
5. Salin kode API yang diawali `AIzaSy...`.
6. *(Tips)*: Kamu bisa membuat beberapa key dari akun berbeda untuk memanfaatkan fitur rotasi kunci otomatis.

### 2. Mendapatkan Tavily Search API Key
1. Buka situs **[Tavily AI](https://tavily.com/)**.
2. Daftar akun gratis (*Free tier* dapat jatah **1.000 pencarian per bulan**).
3. Buka halaman **Dashboard**.
4. Salin kode API yang diawali `tvly-...`.

---

## 🚀 Cara Pakai

### 1. Membuka Aplikasi
Langsung buka web lewat browser:  
👉 **[https://grrmini.vercel.app](https://grrmini.vercel.app)**

Saat pertama kali dibuka, menu pengaturan kunci (**Keys**) akan otomatis muncul untuk meminta API key awal.

### 2. Memasukkan Multi-Key (Menu "Keys")
Klik tombol **Keys** di bilah navigasi atas:

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
- **Gemini API Keys**: Masukkan satu atau beberapa key, pisahkan tiap key dengan baris baru (*Enter*).
- **Tavily API Keys**: Masukkan key Tavily milikmu (bisa isi lebih dari satu untuk rotasi otomatis).
- Klik **Simpan Pengaturan**. Seluruh kunci disimpan lokal di `localStorage` browsermu dan tidak pernah dikirim ke pihak luar selain penyedia API terkait.

### 3. Menggunakan Fitur Web Browsing
- Centang kotak **Web Browsing (Tavily)** kalau ingin menanyakan hal-hal baru (berita hari ini, skor pertandingan, cuaca, atau harga barang terkini).
- Hilangkan centang untuk obrolan santai, coding, atau analisis teks agar kuota pencarian web tidak cepat habis.

### 4. Menyimpan & Menghapus Chat Favorit
- Klik tombol **☆ Simpan** di pojok kanan balon pesan AI untuk menyimpan jawaban penting.
- Lihat kembali catatan yang tersimpan lewat tombol **Favorit** di header atas.
- **Proteksi Hapus 1,5 Detik**: Tombol **Hapus** memiliki jeda konfirmasi 1,5 detik (`Yakin? 1.5s` ➔ `Hapus Sekarang`) untuk mencegah chat terhapus karena salah pencet di layar mini.

### 5. Memulai Obrolan Baru
Klik tombol **Reset** di header untuk membersihkan layar obrolan dan menampilkan sapaan awal sesuai waktu saat itu (Pagi, Siang, Sore, atau Malam).

---

## 🌐 Deploy ke Vercel

Kalau kamu ingin menjalankan project ini di akun Vercel sendiri:

### Cara 1: Lewat Dashboard Vercel (Paling Gampang)
1. Buka [Vercel Dashboard](https://vercel.com/) dan lakukan login.
2. Klik tombol **Add New** ➔ **Project**.
3. Sambungkan akun GitHub dan pilih repositori `grrmini`.
4. Pada bagian pengaturan:
   - **Framework Preset**: Pilih `Other`.
   - **Root Directory**: `./` (biarkan default).
5. Klik **Deploy**. Vercel akan otomatis menyiapkan aplikasi web di domain `*.vercel.app`.

### Cara 2: Lewat Vercel CLI
```bash
# Pasang Vercel CLI jika belum ada
npm i -g vercel

# Masuk ke folder project
cd grrmini

# Jalankan deploy
vercel
```

---

## 📱 Kompatibilitas Perangkat

Grrmini sudah diuji dan berjalan lancar di:
- 📱 **BlackBerry 10 OS** (BlackBerry Q10) lewat browser bawaan (rasio layar kotak 1:1).
- 📱 **Feature Phone & Ponsel Mini** dengan layar beresolusi kompak.
- 💻 **Desktop & Smartphone Modern** (Chrome, Firefox, Safari, Edge, Opera, Kiwi, Brave).

---

## 🛠️ Detail Tech Stack

| Bagian | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Tampilan & Struktur** | HTML5 Semantik | Tag standar tanpa dependensi UI eksternal, hemat memori. |
| **Desain & Gaya** | CSS3 Murni | Layout Flexbox responsif, pas di layar kecil, serta tema gelap hemat daya (*OLED-friendly*). |
| **Logika Frontend** | Vanilla JavaScript | Menggunakan `XMLHttpRequest` dan `localStorage` native tanpa runtime tambahan. |
| **Backend Relay** | Vercel Serverless Function (`api/chat.js`) | Perantara pemanggilan API untuk memotong kendala CORS di browser lama. |
| **Model AI** | Google Gemini 3.6 Flash | Endpoint resmi `generateContent` via Google Generative Language API v1beta. |
| **Pencarian Web** | Tavily REST API | Mesin pencari berbasis AI yang ringkas untuk konteks web real-time. |
| **Hosting** | Vercel | Didistribusikan global via CDN di **[grrmini.vercel.app](https://grrmini.vercel.app)**. |
| **Penyimpanan Data** | Browser LocalStorage | Menyimpan API key dan riwayat chat favorit langsung di perangkat pengguna. |

---

## 📄 Lisensi

Project ini dirilis di bawah lisensi [MIT License](LICENSE). Bebas digunakan, diubah, dan didistribusikan ulang untuk kebutuhan pribadi maupun komersial.

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
