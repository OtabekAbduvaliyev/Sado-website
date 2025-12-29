# 🎙️ Sadoo Overview

<div align="center">

**Erkin Gapiring. Sadoo Tinglaydi.**
_(Speak Freely. Sadoo Listens.)_

[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[**Live Demo**](https://sadoo.uz/) | [**Telegram Bot**](https://t.me/sadoouzBot) | [**Documentation**](#-user-guide)

</div>

---

## 📖 Introduction

This repository contains the **Official Presentation Website** (Landing Page) for the **Sadoo Ecosystem**.

**Sadoo** is a professional, high-performance voice-to-text platform specifically optimized for the **Uzbek language**. It leverages state-of-the-art AI models (Google Gemini 3.0 Flash) to provide real-time transcription, audio recording, AI-powered summarization, and seamless translation.

---

## 🌐 The Sadoo Ecosystem

Sadoo is more than just a website; it is a comprehensive cross-platform ecosystem designed to be available wherever you need it.

- **[Sadoo Web](https://sadoo.uz/)**: The core Progressive Web App (PWA) for heavy-duty transcription and document management.
- **[Sadoo Mobile](https://github.com/kaizo/Sadoo/tree/main/Sadoo_mobile)**: Native mobile experience for iOS and Android, optimized for on-the-go recording.
- **[Sadoo Bot](https://t.me/sadoouzBot)**: A powerful Telegram bot that brings Sadoo's AI capabilities into your messenger.
- **[Sadoo Admin](https://github.com/kaizo/Sadoo/tree/main/sado-admin)**: A dedicated portal for system monitoring, user management, and analytics.

---

## 🚀 Key Platform Features

### 1. 🇺🇿 Specialized for Uzbek

- **Dual Script Support**: Instantly toggle between **Latin (Lotin)** and **Cyrillic (Кирилл)**.
- **High Accuracy**: Optimized for Tashkent dialect and literary Uzbek grammar.
- **Smart Punctuation**: Automatic insertion of commas, periods, and question marks.

### 2. ⚡ Real-Time & Hybrid Mode

- **Live Transcription**: Low-latency streaming of words as you speak.
- **Hybrid Recording**: Captures high-quality audio while simultaneously transcribing.
- **Live Editing**: Interactive text area allowing manual corrections during active sessions.

### 3. 🧠 AI Superpowers

- **Summarize**: Generate concise summaries of long-form audio in seconds.
- **Translate**: Multi-lingual support for translating transcripts to English, Russian, and more.
- **Contextual Chat**: Ask the AI questions about your recording or meeting.

### 4. 🎨 "Soft & Easy" Design

- **Action Deck Layout**: Intuitive control panel optimized for mobile-first interactions.
- **Audio Visualizer**: Beautiful emerald waveform providing real-time visual feedback.
- **Dark Mode**: Fully immersive dark theme with system persistence.

---

## 🛠️ Technical Stack (Landing Page)

| Layer          | Frontend                      |
| :------------- | :---------------------------- |
| **Framework**  | React 19 (Latest)             |
| **Build Tool** | Vite 6                        |
| **Styling**    | Tailwind CSS 4.0              |
| **Icons**      | Lucide React                  |
| **Animations** | Framer Motion & CSS keyframes |
| **Deployment** | Vercel                        |

---

## 📦 Installation & Local Development

To run this landing page project locally, follow these steps:

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/Sadoo.git
    cd Sadoo/Sadoo_overview
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run Development Server**

    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 📖 User Guide (Main App)

- **Start Recording**: Press the green Microphone button. Speak clearly in Uzbek.
- **Edit Live**: Tap on the text area to correct words while recording.
- **Review**: Use the integrated seekable player to listen back to specific parts.
- **AI Assist**: Click the **Sparkles** icon for summarization or the **Globe** icon for translation.
- **Export**: Download your work as professional PDF or Word documents.

---

## 🔒 Privacy & Data

- **Local Processing**: Audio for live mode is streamed directly to secure AI endpoints.
- **Secure Storage**: Session history is stored in your browser's IndexedDB (local) or your private cloud account.
- **Data Privacy**: No audio data is used for training without explicit user consent.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

Copyright © 2025 **Radikal AI** - Prepared by [radikal.uz](https://radikal.uz)
