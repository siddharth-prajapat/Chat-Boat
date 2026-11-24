# Robo — AI Chat Companion 🤖
 
A custom-built AI chatbot made from scratch using vanilla HTML, CSS, and JavaScript — powered by Google's Gemini API.
 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
 
---
 
## 🌐 Live Demo
 
![Demo](https://img.shields.io/badge/Demo-%13235F27.svg?style=for-the-badge&logo=Demo&logoColor=white&sidh-chatboat.netlify.app)
 
---
 
## 📖 About
 
**Robo** is a browser-based AI chatbot built entirely with front-end web technologies — no frameworks, no templates. It uses Google's **Gemini API** to generate real, intelligent responses, with a custom personality system that lets users choose how Robo talks to them.
 
---
 
## ✨ Features
 
### Core Chat
- Real AI responses via the Gemini API (`gemini-2.5-flash`)
- **Three selectable personality modes:**
  - 💕 **Girlfriend** — warm, affectionate, caring
  - 🔥 **BFF** — loud, funny, straightforward
  - 😊 **Friend** — normal, relaxed, casual
- Send messages by clicking Send or pressing Enter
- Responds naturally in English, Hindi, or Hinglish
### Interface
- Custom chat-bubble UI with distinct styling for user and bot messages
- Scrollable chat window with a fixed header and input bar
- Mobile-responsive layout, including keyboard-aware input positioning
- Dedicated **About page** describing the bot and its capabilities
### Data Persistence
- **localStorage** — conversation history persists across page refreshes
- **Google Sheets logging** — every message is backed up to a connected Google Sheet via a Google Apps Script Web App
---
 
## 🛠️ Tech Stack
 
| Layer | Technology | Purpose |
|---|---|---|
| Structure | HTML | Page layout |
| Styling | CSS (Flexbox) | Bubble design, responsive layout |
| Logic | Vanilla JavaScript | DOM manipulation, event handling, API calls |
| AI | Google Gemini API | Generates chatbot replies |
| Storage | Browser localStorage | Persists chat history |
| Logging | Google Apps Script + Sheets | External message log |
| Hosting | Netlify | Deployment |
 
---
 
## 📂 Project Structure
 
```
├── index.html          # Main chat interface
├── about.html          # About page
├── style.css           # Chat page styling
├── About.css           # About page styling
├── script.js           # Chat logic + Gemini API integration
├── robo.mp4            # Bot avatar video
└── message.png / clip.png   # UI icons
```
 
---
 
## 🚀 Setup (Local)
 
1. Clone or download this repository
2. Get a free Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. Add the key to the `api_key` variable in `script.js`
4. *(Optional)* Set up a Google Sheet + Apps Script Web App for logging, and add its URL to `sheet_id` in `script.js`
5. Open `index.html` in a browser — no build tools required
---
 
## ☁️ Deployment
 
This project is deployed on **Netlify** as a static site.
 
To update the live site after making changes:
- **Manual:** Drag and drop the updated project folder into Netlify's Deploys tab
- **Git-connected:** Push changes to the connected GitHub repository — Netlify redeploys automatically
> ⚠️ **Note:** The Gemini API key is currently used directly in client-side JavaScript, which means it's visible to anyone viewing the page source. For production use with real traffic, consider moving API calls behind a backend or serverless function to keep the key private.
 
---
 
## 📌 Possible Next Steps
 
- File/image attachment support
- Light/dark theme toggle
- Typing indicator while waiting for a response
- Move the API key to a backend proxy
---
 
## 👤 Author
 
Built by **Siddharth** as a hands-on learning project — covering HTML/CSS layout, JavaScript DOM manipulation, REST API integration, browser storage, and deployment.
 
