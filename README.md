<div align="center">

# ✦ Grrmini ✦

**Ultra-Lightweight Gemini AI Web Client — Zero Dependencies, Legacy Browser Ready, 100% Client-Side.**

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gemini 3.6 Flash](https://img.shields.io/badge/Google%20Gemini-3.6%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![Tavily Search](https://img.shields.io/badge/Search-Tavily%20API-00C7B7?style=for-the-badge&logo=tavily&logoColor=white)](https://tavily.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <a href="#-gambaran-umum">Gambaran Umum</a> •
  <a href="#-fitur-unggulan">Fitur Unggulan</a> •
  <a href="#-arsitektur--alur-kerja">Arsitektur</a> •
  <a href="#-panduan-mendapatkan-api-key">Dapatkan API Key</a> •
  <a href="#-panduan-penggunaan">Cara Pakai</a> •
  <a href="#-panduan-deploy-ke-github-pages">Deploy</a> •
  <a href="#-lisensi">Lisensi</a>
</p>

---

</div>

## 📖 Gambaran Umum

**Grrmini** adalah klien web kecerdasan buatan (*AI chat client*) mandiri berbasis Google Gemini yang dirancang **murni dengan Vanilla HTML5, CSS3, dan JavaScript standar** tanpa satu pun dependensi pustaka luar, framework modern (React/Vue/Angular), maupun *bundler/build-tools*.

Project ini dibangun dengan filosofi **efisiensi ekstrem dan aksesibilitas maksimal**:
- **Dukungan Perangkat Lawas (*Legacy-Friendly*)**: Didesain secara spesifik dan ergonomis untuk perangkat berspesifikasi minim serta peramban web lawas berlayar rasio kotak **1:1 (720x720 piksel)** seperti **BlackBerry Q10**, BlackBerry Passport, maupun ponsel keypad/touch modern.
- **100% Client-Side**: Seluruh logika aplikasi, komunikasi API via `XMLHttpRequest`, *state management*, hingga parsing Markdown berjalan langsung di dalam peramban web pengguna.
- **Nol Biaya Server**: Cukup letakkan berkas statis di **GitHub Pages**, dan aplikasi langsung aktif tanpa butuh VPS, Node.js runtime, server backend sewa, atau konfigurasi proxy rumit.

---

## ⚡ Fitur Unggulan

| Fitur | Deskripsi |
| :--- | :--- |
| 🌐 **100% Static & Client-Side** | Berjalan penuh di sisi klien (*browser*). Sangat aman, privat, dan dapat di-host secara gratis di GitHub Pages tanpa backend server tambahan. |
| 🪶 **Ultra-Lightweight & Legacy-Friendly** | Tidak ada React, tidak ada Tailwind, tidak ada Marked.js. Dibekali **Custom Regex Markdown Parser** ringan untuk merender format teks tebal/miring, kutipan (*blockquote*), daftar (*lists*), dan tabel data responsif. |
| 🕒 **Auto WIB Time Injection** | Menghitung dan menyuntikkan waktu lokal Jakarta (**WIB / UTC+7**) secara otomatis ke dalam *system prompt*. AI selalu tahu hari, tanggal, bulan, tahun, dan jam terkini tanpa membuang kuota pencarian web. |
| 🔄 **Smart Multi-Key Failover (Rerolling)** | Mencegah terhentinya percakapan karena limit kuota (*rate limit / HTTP 429*). Cukup masukkan beberapa Gemini API Key dan Tavily API Key (satu baris per kunci), sistem otomatis berpindah ke kunci berikutnya secara *seamless*. |
| 🔍 **Web Browsing Toggle (Tavily)** | Akses informasi faktual terkini dari internet melalui integrasi Tavily Search API. Dapat diaktifkan atau dimatikan sewaktu-waktu hanya dengan satu klik checkbox. |
| ⭐ **Penyimpanan Chat Favorit** | Simpan jawaban penting ke `localStorage` peramban. Dilengkapi proteksi tombol hapus berjangka jeda **1,5 detik (*anti-accidental click safeguard*)** untuk mencegah terhapusnya data tanpa sengaja pada layar sentuh kecil. |
| ⌨️ **Tampilan Keyboard & Trackpad Friendly** | Antarmuka adaptif dengan navigasi cepat: kirim pesan via tombol enter, tombol reset sesi kilat, dan palet warna *dark mode* modern bernuansa abu gelap yang ramah layar OLED/AMOLED. |

---

## 🏗️ Arsitektur & Alur Kerja

Grrmini beroperasi langsung dari browser perangkat menuju API penyedia:

```
[ Pengguna Mengetik Pesan ]
           │
           ▼
[ Toggle Web Browsing Aktif? ]
   ├─── YA  ──► [ Rotasi Tavily Search API ] ──► Dapatkan Cuplikan Web
   └─── TIDAK ───────────────────────────────┐
                                             │
                                             ▼
                        [ Susun System Instruction ]
                         • Injeksi Waktu Lokal (WIB)
                         • Sertakan Konteks Web (Jika Ada)
                         • Riwayat Percakapan Terakhir
                                             │
                                             ▼
                        [ Request ke Gemini API ]
                         (Endpoint: gemini-3.6-flash)
                                             │
                                             ▼
                                [ Status HTTP 200? ]
                                 ├─── YA  ──► Tampilkan Efek Ketik & Render Markdown
                                 └─── TIDAK ─► [ Coba Gemini Key Berikutnya (Failover) ]
```

---

## 🔑 Panduan Mendapatkan API Key (Gratis)

Grrmini membutuhkan setidaknya satu **Google Gemini API Key**. Jika Anda ingin mengaktifkan fitur pencarian web real-time, Anda juga dapat menambahkan **Tavily Search API Key**. Keduanya menyediakan kuota gratis yang melimpah!

### 1. Mendapatkan Google Gemini API Key (Gratis)
1. Kunjungi portal **[Google AI Studio](https://aistudio.google.com/)**.
2. Masuk menggunakan akun Google Anda.
3. Klik tombol **Get API key** di bilah navigasi kiri.
4. Klik **Create API key** (buat di project Google Cloud baru atau yang sudah ada).
5. Salin token API yang berawalan `AIzaSy...`.
6. *(Opsional tapi disarankan)*: Anda dapat membuat 2–3 API key berbeda untuk memanfaatkan fitur multi-key rerolling Grrmini.

### 2. Mendapatkan Tavily Search API Key (Gratis)
1. Kunjungi situs resmi **[Tavily AI](https://tavily.com/)**.
2. Klik **Sign Up** untuk membuat akun gratis (*Free tier* mencakup **1.000 pencarian/bulan**).
3. Buka menu **Dashboard / Overview**.
4. Salin API key yang berawalan `tvly-...`.

---

## 🚀 Panduan Penggunaan

### 1. Membuka Aplikasi
Buka URL repositori GitHub Pages Anda (misal: `https://username.github.io/grrmini/public/`). Saat pertama kali dibuka, panel konfigurasi kunci akan otomatis muncul.

### 2. Memasukkan Multi-Key (Menu "Keys")
Klik tombol **Keys** pada bilah navigasi atas untuk menampilkan formulir pengaturan:

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
- **Tavily API Keys**: Masukkan key Tavily Anda (juga mendukung banyak key untuk rotasi otomatis).
- Klik **Simpan Pengaturan**. Seluruh kunci disimpan aman di `localStorage` peramban Anda dan tidak pernah dikirim ke server pihak ketiga mana pun selain Google dan Tavily.

### 3. Menggunakan Web Browsing (Tavily)
- Beri tanda centang pada checkbox **Web Browsing (Tavily)** di atas kolom input teks jika Anda ingin menanyakan informasi faktual hari ini (seperti berita, cuaca, harga saham, atau skor pertandingan olahraga).
- Hilangkan centang jika ingin percakapan umum, pemrograman, atau analisis teks murni guna menghemat kuota pencarian.

### 4. Menyimpan & Menghapus Chat Favorit
- Pada setiap balasan Gemini yang selesai diketik, klik tombol **☆ Simpan** di sudut kanan gelembung pesan.
- Untuk membaca kembali catatan yang disimpan, klik tombol **Favorit** di header atas.
- **Proteksi Hapus 1,5 Detik**: Tombol **Hapus** pada riwayat favorit memiliki mekanisme jeda konfirmasi selama 1,5 detik (`Yakin? 1.5s` ➔ `Hapus Sekarang`) demi mencegah ketidaksengajaan tertekan pada layar sentuh mini perangkat jadul.

### 5. Memulai Sesi Baru
Klik tombol **Reset** pada header untuk membersihkan riwayat obrolan di layar dan mengembalikan sapaan awal sesuai waktu saat ini (Pagi, Siang, Sore, Malam).

---

## 🌐 Panduan Deploy ke GitHub Pages

Karena Grrmini 100% murni berkas statis, Anda dapat mendeploy-nya ke GitHub Pages dalam hitungan detik:

1. **Fork** atau **Clone** repositori ini ke akun GitHub Anda:
   ```bash
   git clone https://github.com/irfanGaming720/masjemini.git
   cd masjemini
   ```
2. Pastikan file `index.html` berada pada cabang utama (`main`).
3. Buka halaman repositori Anda di GitHub:
   - Masuk ke tab **Settings** ➔ **Pages**.
   - Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
   - Pilih Branch: `main` dan folder: `/ (root)` atau `/public` (sesuai penempatan `index.html` Anda).
   - Klik **Save**.
4. Dalam 1–2 menit, web app Grrmini Anda siap diakses secara publik di alamat:
   ```
   https://<username-github>.github.io/<nama-repo>/
   ```

---

## 📱 Kompatibilitas Perangkat

Grrmini telah diuji dan dioptimalkan untuk:
- 📱 **BlackBerry 10 OS** (BlackBerry Q10, Q5, Classic, Passport) via BlackBerry Native Browser.
- 📱 **Feature Phone & Perangkat Mini** dengan resolusi layar 1:1, 4:3, atau rasio modern.
- 💻 **Desktop & Smartphone Modern** (Chrome, Firefox, Safari, Edge, Opera).

---

## 🛠️ Tech Stack Detail

| Lapisan | Teknologi | Catatan |
| :--- | :--- | :--- |
| **Markah & Struktur** | HTML5 Semantik | Tag standar tanpa pustaka UI eksternal. |
| **Gaya & Desain** | CSS3 Murni | Tampilan responsif Flexbox, ramah viewport kecil, tema gelap hemat daya. |
| **Logika & State** | Vanilla JavaScript (ES5/ES6) | Menggunakan objek native `XMLHttpRequest` dan `localStorage` tanpa dependensi runtime. |
| **Model AI** | Google Gemini 3.6 Flash | Endpoint resmi `generateContent` via Google Generative Language API v1beta. |
| **Pencarian Web** | Tavily REST API | Integrasi pencarian web AI berbobot ringkas untuk konteks real-time. |
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
  <sub>Dibuat dengan ❤️ untuk para pecinta perangkat lawas dan web minimalis berkecepatan tinggi.</sub>
</div>
