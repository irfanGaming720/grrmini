<div align="center">

**English** | **[Bahasa Indonesia](README.id.md)**

<br/>
<br/>

<img src="https://raw.githubusercontent.com/irfanGaming720/grrmini/main/public/apple-touch-icon.png" alt="Grrmini Logo" width="160" style="border-radius: 28px; margin-bottom: 12px;" />

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

### 🌐 Web App Link: [grrmini.vercel.app](https://grrmini.vercel.app)

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture--workflow">Architecture</a> •
  <a href="#-getting-api-keys-free">Getting API Keys</a> •
  <a href="#-how-to-use">How to Use</a> •
  <a href="#-deploying-to-vercel">Deploy to Vercel</a> •
  <a href="#-license">License</a>
</p>

---

</div>

## 📖 Overview

**Grrmini** is a standalone artificial intelligence web client (*AI chat client*) powered by Google Gemini, crafted **purely with Vanilla HTML5, CSS3, and standard JavaScript** without external library dependencies, modern frameworks (React/Vue/Angular), or heavy bundlers/build-tools.

This project is deployed on **[Vercel](https://grrmini.vercel.app)** and built with the philosophy of **extreme efficiency and maximum accessibility**:
- **Legacy Device Support (*Legacy-Friendly*)**: Specifically and ergonomically designed for low-spec devices and vintage web browsers with **1:1 square ratio screens (720x720 pixels)** such as the **BlackBerry Q10**, as well as modern keypad/touchscreen phones.
- **Zero Frontend Dependencies & Serverless Relay**: Pure HTML/CSS/JS interface without heavy libraries. Third-party API communication is handled via a Vercel Serverless Function (`api/chat.js`) acting as a secure intermediary (*relay*), avoiding CORS obstacles on vintage browsers while keeping performance snappy.
- **Hosted on Vercel**: Accessible directly and publicly at **[grrmini.vercel.app](https://grrmini.vercel.app)** powered by Vercel's global Edge CDN network with high availability.

---

## ⚡ Key Features

| Feature | Description |
| :--- | :--- |
| 🚀 **Hosted on Vercel & Fast CDN** | Runs smoothly on Vercel's edge network via the domain **[grrmini.vercel.app](https://grrmini.vercel.app)** with near-instant loading time. |
| ⚡ **Zero Frontend Dependencies & Relay** | Featherlight frontend without npm bundles, paired with a Vercel Serverless Function (`api/chat.js`) as a secure relay that bypasses CORS on legacy browsers. |
| 🪶 **Ultra-Lightweight & Legacy-Friendly** | No React, no Tailwind, and no Marked.js. Uses an internal lightweight **Custom Regex Markdown Parser** to render bold/italic text, blockquotes, lists, and responsive data tables. |
| 🕒 **Auto WIB Time Injection** | Automatically calculates and injects Jakarta local time (**WIB / UTC+7**) into the *system instruction*. The AI always understands the context of the current day, date, month, year, and hour without wasting web search quota. |
| 🔄 **Smart Multi-Key Failover (Rerolling)** | Prevents interruptions caused by rate limits (HTTP 429) or exhausted daily quotas. Supports multiple Gemini API Keys and Tavily API Keys (one per line). The system automatically rotates to the next key without dropping the conversation. |
| 🔍 **Web Browsing Toggle (Tavily)** | Access real-time factual web searches via Tavily Search API. Simply toggle on/off with a single tap of a checkbox. |
| ⭐ **Favorite Chat Storage** | Save important response history to `localStorage`. Equipped with a **1.5-second confirmation delay safeguard** on the delete button to prevent accidental clicks on small screens. |
| ⌨️ **Ergonomic Keyboard & Trackpad Navigation** | Supports the `Enter` key to send messages, a fast **Reset** session button, and a modern dark mode palette in dark gray to save power on OLED/AMOLED screens. |

---

## 🏗️ Architecture & Workflow

Grrmini pairs an ultra-lightweight browser interface with a Vercel serverless function (`api/chat.js`) acting as a relay bridge to avoid CORS limitations and ensure vintage browser compatibility:

```text
[ User Input ] ──► [ Vercel Serverless Relay (api/chat) ]
                       ├── Jakarta Time (WIB) Injection
                       ├── Tavily Search Rotation (If Toggle Active)
                       └── Request to Gemini 3.6 Flash (Failover Loop)
                                 │
                                 ▼
                 [ Send Reply to BlackBerry Browser ]
                                 │
                                 ▼
                 [ Render Markdown & Save Favorites ]
```

---

## 🔑 Getting API Keys (Free)

Grrmini requires at least one **Google Gemini API Key**. For the real-time web search feature, you can also add a **Tavily Search API Key**. Both offer generous free tiers:

### 1. Getting a Google Gemini API Key (Free)
1. Visit the **[Google AI Studio](https://aistudio.google.com/)** portal.
2. Sign in with your Google account.
3. Click the **Get API key** menu on the left navigation bar.
4. Click **Create API key** (choose an available Google Cloud project or create a new one).
5. Copy the API token starting with `AIzaSy...`.
6. *(Tips)*: You can create 2–3 different API keys to take advantage of Grrmini's automatic multi-key rerolling feature.

### 2. Getting a Tavily Search API Key (Free)
1. Visit the official **[Tavily AI](https://tavily.com/)** website.
2. Click **Sign Up** to create a free account (*Free tier* includes **1,000 searches/month**).
3. Open the **Dashboard** page.
4. Copy the API key starting with `tvly-...`.

---

## 🚀 How to Use

### 1. Opening the App
Access the web app directly in your browser:  
👉 **[https://grrmini.vercel.app](https://grrmini.vercel.app)**

When opened for the first time, the key settings panel (*Keys*) will automatically pop up asking for initial API key configuration.

### 2. Entering Multi-Keys ("Keys" Menu)
Click the **Keys** button on the top menu bar:

```text
┌────────────────────────────────────────────────────────┐
│ Gemini API Keys (1 per line):                          │
│ AIzaSyA1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           │
│ AIzaSyB2yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy           │
│ AIzaSyC3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz           │
│                                                        │
│ Tavily API Keys (1 per line for rotation):             │
│ tvly-dev-Axxxxxxxxxxxxxxxxxxxx                         │
│ tvly-dev-Byyyyyyyyyyyyyyyyyyyy                         │
│                                                        │
│                        [ Save Settings ]               │
└────────────────────────────────────────────────────────┘
```
- **Gemini API Keys**: Enter one or more keys, separating each key with a new line (*Enter*).
- **Tavily API Keys**: Enter your Tavily key(s) (also supports multiple lines for automatic rotation).
- Click **Save Settings**. All keys are stored privately in your browser's `localStorage` and are never saved on any third-party servers.

### 3. Using Web Browsing (Tavily)
- Check the **Web Browsing (Tavily)** checkbox when you want to query current information (today's news, match scores, weather, latest prices).
- Uncheck for general chatting, brainstorming, or coding to conserve web search quota.

### 4. Saving & Deleting Favorite Chats
- Click the **☆ Simpan** button on the top right corner of the AI reply bubble to save important chats.
- Open the saved list anytime by pressing the **Favorit** button in the header.
- **1.5-Second Delay Safeguard**: To prevent accidental taps on small touchscreen devices, the **Hapus** button requires a 1.5-second delay (`Yakin? 1.5s` ➔ `Hapus Sekarang`) before data is permanently removed from `localStorage`.

### 5. Starting a New Session
Press the **Reset** button in the top navigation to clear the on-screen chat and start a fresh conversation session with a friendly greeting suited to the time of day (Morning/Afternoon/Evening/Night).

---

## 🌐 Deploying to Vercel

If you want to deploy this project to your own Vercel account:

### Method 1: Via Vercel Dashboard (Recommended)
1. Open [Vercel Dashboard](https://vercel.com/) and log in.
2. Click **Add New** ➔ **Project**.
3. Connect your GitHub account and select the `grrmini` repository.
4. In the configuration settings:
   - **Framework Preset**: Select `Other`.
   - **Root Directory**: `./` (default).
5. Click **Deploy**. Vercel will automatically distribute your web application to your `*.vercel.app` domain.

### Method 2: Using Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Enter project directory
cd grrmini

# Run deploy
vercel
```

---

## 📱 Device Compatibility

Grrmini has been thoroughly tested and optimized for:
- 📱 **BlackBerry 10 OS** (BlackBerry Q10) via BlackBerry Native Browser (1:1 screen ratio).
- 📱 **Feature Phones & Mini Devices** with square or compact screen resolutions.
- 💻 **Modern Desktop & Smartphone Browsers** (Chrome, Firefox, Safari, Edge, Opera, Kiwi, Brave).

---

## 🛠️ Detailed Tech Stack

| Layer | Technology | Role & Description |
| :--- | :--- | :--- |
| **Markup & Structure** | Semantic HTML5 | Standard tags with no external UI libraries, memory-efficient. |
| **Styling & Design** | Pure CSS3 | Responsive Flexbox layout, small viewport friendly, power-saving dark theme (*OLED friendly*). |
| **Frontend Logic** | Vanilla JavaScript (ES5/ES6) | Uses native `XMLHttpRequest` and `localStorage` without npm runtime dependencies. |
| **Backend Relay** | Vercel Serverless Function (`api/chat.js`) | Secure API intermediary to prevent CORS limitations on legacy browsers. |
| **AI Model** | Google Gemini 3.6 Flash | Official `generateContent` endpoint via Google Generative Language API v1beta. |
| **Web Search** | Tavily REST API | Lightweight AI web search integration for real-time context. |
| **Hosting & Platform** | Vercel | Global CDN at **[grrmini.vercel.app](https://grrmini.vercel.app)**. |
| **Storage** | Browser LocalStorage | Securely stores API keys and favorite chat lists privately on the user's side. |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and redistribute this code for personal or commercial purposes.

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
  <sub>Made with ❤️ for Blackberry phone lovers and Gemini AI.</sub><br/>
  <sub>Visit: <a href="https://grrmini.vercel.app">grrmini.vercel.app</a></sub>
</div>
