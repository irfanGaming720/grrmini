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
[![Views](https://visitor-badge.laobi.icu/badge?page_id=irfanGaming720.grrmini)](https://github.com/irfanGaming720/grrmini)

<br/>

### 🌐 Live Web App: [grrmini.vercel.app](https://grrmini.vercel.app)

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture--workflow">Architecture</a> •
  <a href="#-getting-api-keys">Getting API Keys</a> •
  <a href="#-usage-guide">Usage Guide</a> •
  <a href="#-deploying-to-vercel">Deploy to Vercel</a> •
  <a href="#-license">License</a>
</p>

---

</div>

## 📖 Overview

**Grrmini** is an ultra-lightweight web client for Google Gemini built entirely with **Vanilla HTML5, CSS3, and standard JavaScript**. It requires no modern frontend frameworks (React/Vue), no CSS libraries (Tailwind), and no build steps or bundlers.

Hosted on **[Vercel](https://grrmini.vercel.app)**, the project focuses on **minimal resource consumption and legacy browser compatibility**:
- **Optimized for Legacy Hardware**: Designed specifically to run on older mobile browsers and fit **1:1 square displays (720x720)** such as the **BlackBerry Q10**, physical keypad devices, and modern smartphones.
- **Zero Frontend Dependencies & Serverless Relay**: The interface uses direct DOM manipulation and native `XMLHttpRequest`. API requests are proxied through a Vercel Serverless Function (`api/chat.js`) to bypass CORS restrictions on older browsers while keeping network overhead low.
- **Public Edge Deployment**: Deployed globally on Vercel's Edge CDN at **[grrmini.vercel.app](https://grrmini.vercel.app)** for fast initial loading times.

---

## ⚡ Key Features

| Feature | Description |
| :--- | :--- |
| 🚀 **Hosted on Vercel & Fast CDN** | Delivered globally via **[grrmini.vercel.app](https://grrmini.vercel.app)** with instant page loads. |
| ⚡ **Zero Frontend Dependencies** | Pure native frontend with no npm runtime packages, paired with `api/chat.js` to handle CORS and backend routing safely. |
| 🪶 **Legacy-Friendly Markdown Parser** | Built-in regex markdown parser that formats bold/italic text, blockquotes, lists, and responsive tables without external dependencies like Marked.js. |
| 🕒 **Local Time Context Injection (WIB)** | Automatically injects current Jakarta time (**WIB / UTC+7**) into the system prompt, keeping the model aware of date and time without external lookups. |
| 🔄 **Multi-Key Failover (Rerolling)** | Enter multiple Gemini and Tavily API keys (one per line). The app automatically switches to the next available key upon hitting rate limits (HTTP 429) or quota bounds. |
| 🔍 **Web Search Toggle (Tavily)** | Fetch real-time factual web context using the Tavily Search API, toggled via a simple checkbox. |
| ⭐ **Local Bookmark Storage** | Save notable responses to `localStorage`. Includes a **1.5-second confirmation delay** on deletion to prevent accidental taps on small touchscreens. |
| ⌨️ **Keyboard & OLED Optimized** | Supports `Enter` to submit, quick session resets, and a high-contrast dark theme optimized for OLED/AMOLED power saving. |

---

## 🏗️ Architecture & Workflow

Grrmini routes browser requests through a serverless backend relay (`api/chat.js`) to handle external APIs securely:

```text
[ User Prompt ] ──► [ Vercel Serverless Relay (api/chat) ]
                         ├── Injects Local Jakarta Time (WIB)
                         ├── Tavily Web Search (If Toggled On)
                         └── Calls Gemini 3.6 Flash (Failover Loop)
                                   │
                                   ▼
                   [ Streams Response to Browser ]
                                   │
                                   ▼
             [ Custom Regex Markdown Rendering & Storage ]
```

---

## 🔑 Getting API Keys

Grrmini requires at least one Google Gemini API Key. If you want real-time web search, you can also provide a Tavily Search API Key. Both offer free tiers with no credit card required:

### 1. Google Gemini API Key
1. Go to **[Google AI Studio](https://aistudio.google.com/)**.
2. Sign in with your Google account.
3. Click **Get API key** in the sidebar.
4. Click **Create API key**.
5. Copy the generated key starting with `AIzaSy...`.
6. *(Optional)*: Add keys from multiple accounts to enable automatic rotation.

### 2. Tavily Search API Key
1. Go to **[Tavily AI](https://tavily.com/)**.
2. Register for a free account (1,000 free searches/month).
3. Open your **Dashboard**.
4. Copy the API key starting with `tvly-...`.

---

## 🚀 Usage Guide

### 1. Accessing the Application
Open the app in any browser:  
👉 **[https://grrmini.vercel.app](https://grrmini.vercel.app)**

On your first visit, the **Keys** modal opens automatically to guide initial setup.

### 2. Configuring Keys (The "Keys" Menu)
Click the **Keys** button in the header bar:

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
│                        [ Simpan Pengaturan ]           │
└────────────────────────────────────────────────────────┘
```
- **Gemini API Keys**: Add one or more keys separated by line breaks (*Enter*).
- **Tavily API Keys**: Add one or more Tavily keys for failover rotation.
- Click **Simpan Pengaturan**. Keys remain strictly inside your browser's local storage and are never logged or stored elsewhere.

### 3. Web Search Toggle
- Enable **Web Browsing (Tavily)** to query current events, live scores, weather, or real-time topics.
- Disable it for routine conversation, coding, or brainstorming to conserve monthly search quota.

### 4. Bookmarking & Deleting Messages
- Click **☆ Simpan** on the top-right corner of any completed response bubble to bookmark it.
- View saved messages by clicking **Favorit** in the header.
- **1.5-Second Safeguard**: The **Hapus** button uses a 1.5-second cooldown (`Yakin? 1.5s` ➔ `Hapus Sekarang`) to prevent accidental deletion on compact touchscreens.

### 5. Session Reset
Click **Reset** in the top navigation bar to wipe the current thread and return to the contextual greeting prompt.

---

## 🌐 Deploying to Vercel

To deploy your own instance of Grrmini:

### Option 1: Via Vercel Dashboard (Recommended)
1. Log in to your [Vercel Dashboard](https://vercel.com/).
2. Click **Add New** ➔ **Project**.
3. Import your `grrmini` GitHub repository.
4. Set the project configuration:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
5. Click **Deploy**.

### Option 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to the project directory
cd grrmini

# Deploy
vercel
```

---

## 📱 Device Compatibility

Grrmini is tested and supported on:
- 📱 **BlackBerry 10 OS** (BlackBerry Q10) via native browser (1:1 square display).
- 📱 **Feature phones and compact devices** with low-resolution displays.
- 💻 **Modern desktop & mobile browsers** (Chrome, Firefox, Safari, Edge, Opera, Kiwi, Brave).

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Markup** | Semantic HTML5 | Clean standard markup with zero third-party UI libraries. |
| **Styling** | Pure CSS3 | Responsive Flexbox layout with an OLED-friendly dark palette. |
| **Frontend Logic** | Vanilla JavaScript (ES5/ES6) | Uses native `XMLHttpRequest` and `localStorage` without bundlers. |
| **Backend Relay** | Vercel Serverless Function (`api/chat.js`) | Node.js proxy to resolve browser CORS limitations. |
| **AI Model** | Google Gemini 3.6 Flash | Official `generateContent` endpoint via Google Generative Language API v1beta. |
| **Web Search** | Tavily REST API | AI-optimized search queries for live context injection. |
| **Hosting** | Vercel | Global Edge network hosting at **[grrmini.vercel.app](https://grrmini.vercel.app)**. |
| **Client Storage** | Browser LocalStorage | Retains API keys and bookmark history on the client side. |
[![Views](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FirfanGaming720%2Fgrrmini&count_bg=%234285F4&title_bg=%23181818&icon=&icon_color=%23E7E7E7&title=Views&edge_flat=false)](https://github.com/irfanGaming720/grrmini)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it for personal or commercial projects.

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
  <sub>Made with ❤️ for vintage phone lovers and Gemini AI.</sub><br/>
  <sub>Visit: <a href="https://grrmini.vercel.app">grrmini.vercel.app</a></sub>
</div>
