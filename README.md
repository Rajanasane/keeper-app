# Deployment Links

Netlify 

https://jazzy-sundae-abf6c3.netlify.app/

----

Vercel 

https://keeper-app-57y7.vercel.app/

---

# 📝 Keeper App

A React-based note-taking app built as part of a MERN stack assignment. It allows users to create, display, and delete notes in a minimalist interface.

---

## 🚀 Tech Stack

- React.js
- JSX & Components
- React Hooks (`useState`)
- CSS

---

## 📁 Project Structure

keeper-app/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── index.js
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Note.jsx
│ │ └── CreateArea.jsx
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ How to Run Locally

1. **Install dependencies**
   ```bash
   npm install
Start the app

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

⚙️ Fix Common Error on Node 17+ (Optional)
If you encounter this error:

vbnet
Copy
Edit
Error: error:0308010C:digital envelope routines::unsupported
Run with:

bash
Copy
Edit
set NODE_OPTIONS=--openssl-legacy-provider && npm start
Or for Linux/macOS:

bash
Copy
Edit
NODE_OPTIONS=--openssl-legacy-provider npm start
🌐 Deployment
📦 1. Build the React App
bash
Copy
Edit
npm run build
This creates a build/ folder with production-ready code.

📤 2. Deploy on Netlify
Option 1: Netlify Website
Visit https://app.netlify.com/

Click "Add new site" → "Deploy manually"

Drag and drop the build folder

Option 2: Netlify CLI
bash
Copy
Edit
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
⚡ 3. Deploy on Vercel
Option 1: Vercel CLI
bash
Copy
Edit
npm install -g vercel
vercel login
vercel
Option 2: Vercel Website
Visit https://vercel.com

Login with GitHub

Import your GitHub repo

Vercel auto-deploys and gives you a URL
