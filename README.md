Sado 🎙️
Sado is a professional, high-performance voice-to-text platform optimized for the Uzbek language. It provides real-time transcription, audio recording, AI-powered summarization, and translation—all wrapped in a minimalist, "Soft UI" design.

Built with React, TypeScript, and the Google Gemini Live API.

🚀 Key Features
1. 🇺🇿 Specialized for Uzbek
Dual Script Support: Instantly toggle transcription between Latin (Lotin) and Cyrillic (Кирилл).
High Accuracy: Optimized for Tashkent dialect and literary Uzbek grammar.
Smart Punctuation: Automatically inserts commas, periods, and question marks.
2. ⚡ Real-Time & Hybrid Mode
Live Transcription: See words appear instantly as you speak.
Simultaneous Recording: Captures high-quality audio while transcribing.
Continuous Editing: Tap anywhere on the text to edit manually, even while recording.
3. 🧠 AI Superpowers
Summarize: Generate a concise summary of long recordings with one click.
Translate: Instantly translate your Uzbek transcriptions to English or Russian.
Voice Upload: Upload existing audio files (MP3/WAV/M4A) for fast server-side transcription.
4. 🎨 "Soft & Easy" Design
Action Deck Layout: A fixed, intuitive control panel at the bottom for easy mobile access.
Audio Visualizer: Beautiful, symmetrical emerald waveform that reacts to your voice.
Dark Mode: Fully supported dark/light themes with persistence.
Responsive: optimized for both Desktop and Mobile devices.
5. 🛠️ Utilities
Seekable Audio Player: Review your recording with a draggable progress bar.
Social Sharing: Share audio directly to Telegram, WhatsApp, or Instagram (Mobile only).
Export: Download transcriptions as PDF or Word (.doc) documents.
History: Auto-saves sessions to a local database (IndexedDB) so you never lose data.
🛠️ Technical Stack
Frontend: React 19, TypeScript, Vite.
Styling: Tailwind CSS (Dark Mode, Animations).
AI Engine: Google Gemini Multimodal Live API (gemini-2.5-flash-native-audio-preview).
Storage: IndexedDB (via idb pattern) for large audio blobs.
Export: jspdf for PDF generation, Blob-based HTML conversion for Word.
📦 Installation & Setup
Clone the Repository

git clone https://github.com/your-username/Sado.git
cd Sado
Install Dependencies

npm install
Configure API Key

Get a Google Gemini API Key from Google AI Studio.
Create a .env file in the root directory:
API_KEY=your_google_api_key_here
Run Development Server

npm run dev
Open http://localhost:3000 (or the port shown in your terminal).

📖 User Guide
Start Recording: Press the big green Microphone button. Speak clearly in Uzbek.
Edit Live: Tap on the text area to correct words while recording.
Stop & Review: Press the button again to stop.
Use the Player to listen to your voice.
Use the Translate (Languages) button to see English/Russian versions.
Use the Summarize (Sparkles) button for a quick recap.
Export: Click the Download icon to save as Word or PDF.
History: Click the Clock icon in the top right to see past recordings.
Upload: Click the Cloud Upload icon in the bottom deck to transcribe an existing file.
🔒 Privacy & Data
Local Processing: Audio for "Live" mode is streamed directly to Google's API and not stored on any third-party server besides Google.
Local Storage: Your history (audio and text) is stored entirely in your browser's IndexedDB. Clearing browser data will delete your history.
📜 License
MIT License © 2025 Sado