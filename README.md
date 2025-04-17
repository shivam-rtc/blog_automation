# 🧠 AI-Powered Tech Blog Automation

An end-to-end automated blog publishing platform that uses AI to generate, store, and display daily trending tech articles — complete with title, subtitle, featured image, read time, and markdown formatting. Built with OpenRouter (GPT-3.5), Stability AI, MongoDB, Express.js, and React.

### 🔗 Live App:
**Frontend** → [https://blog-automation-two.vercel.app](https://blog-automation-two.vercel.app)

---

## 🚀 Features

✅ Fully automated blog generation (5 daily posts)  
✅ AI-generated title, subtitle, and article content  
✅ Images generated using Stability AI  
✅ Posts stored in MongoDB Atlas  
✅ Medium-style UI with markdown formatting  
✅ Estimated read time  
✅ “Save for later” functionality (coming soon)  
✅ Deployed on Vercel (frontend) + Render (backend)

---

## 🛠️ Tech Stack

| Layer        | Stack                                         |
|--------------|-----------------------------------------------|
| Frontend     | React, Redux Toolkit, Tailwind CSS, Vite      |
| Backend      | Node.js, Express, Axios, CORS                 |
| Database     | MongoDB Atlas                                 |
| AI Services  | OpenRouter (GPT-3.5), Stability AI (images)   |
| Hosting      | Vercel (frontend), Render (backend)           |
| Scheduler    | `node-cron` for daily automation              |

---

## ⚙️ Project Setup

### 📦 Backend (Express + Mongo + AI)

```bash
git clone https://github.com/your-username/blog-backend.git
cd blog-backend
npm install
