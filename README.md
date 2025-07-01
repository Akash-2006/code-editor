# ⚡ Online Code Editor

A powerful, minimal, and blazing-fast online code editor that supports real-time coding in multiple programming languages — built with React, Monaco Editor, and the Piston API.

🌐 **Live Demo**: [code-editor-vert-psi.vercel.app](https://code-editor-vert-psi.vercel.app)

---

## ✨ Features

- ✅ Multi-language support:
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C#
- 🧠 Code execution using [Piston API](https://github.com/engineer-man/piston)
- 🎨 Monaco Editor (same as used in VS Code)
- 🌙 Light & Dark theme toggle
- 🖥️ Real-time output display
- 🔁 Automatic default code injection when changing languages

---

## 🛠️ Tech Stack

- **React** – Frontend framework
- **Monaco Editor** – Core code editor
- **Axios** – For API requests
- **Vite** – Lightning-fast dev server
- **Tailwind CSS** – Styling utility framework
- **Piston API** – Code execution backend

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/code-editor.git
cd code-editor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Then visit: `http://localhost:5173`

---

## 🔌 Code Execution API

This app uses [Piston API](https://emkc.org/api/v2/piston/execute) to run code safely on the backend.

### Example Payload:

```json
{
  "language": "javascript",
  "version": "18.15.0",
  "files": [
    {
      "name": "main.js",
      "content": "console.log('Hello from JavaScript');"
    }
  ]
}
```

### Example Response:

```json
{
  "run": {
    "stdout": "Hello from JavaScript\n",
    "stderr": "",
    "code": 0
  }
}
```

If the language is not supported (e.g., HTML or CSS), the system will handle it gracefully.

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── EditorComponent.jsx
│   ├── LanguageSelector.jsx
│   └── OutputComponent.jsx
│
├── api/
│   └── piston.js            # Axios instance & fetchOutput logic
│
├── utils/
│   └── defaultCodeSnippets.js  # Default boilerplate code for each language
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Planned Improvements

- [ ] Multiple editor tabs (like VS Code)
- [ ] File tree & project explorer
- [ ] HTML/CSS live preview (iframe-based)
- [ ] Save projects to localStorage or cloud
- [ ] AI autocomplete support via OpenAI or Codeium
- [ ] Drag-and-drop file upload & download

---

## 🙌 Acknowledgements

- [Piston API](https://github.com/engineer-man/piston) — The brain behind the code execution
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — Editor used in VS Code
- [Vercel](https://vercel.com/) — Seamless deployment

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with 💙 by **Akash**
