# 📄 Summarizerly

AI-powered PDF summarization platform that generates clear, structured insights from your documents.  
Built with **Next.js 15**, **LangChain**, **Clerk**, and **GPT-4**, Summarizerly provides secure file handling, interactive summaries, and a production-ready experience.

---

## ✨ Features

- 📝 **Smart Summaries** – Clear, structured insights with key points  
- 🎨 **Beautiful Summary Viewer** – Interactive UI with progress tracking  
- 🔒 **Secure File Handling** – Protected uploads & processing  
- 🔐 **Protected Routes** – Secure API endpoints with authentication  
- 📊 **User Dashboard** – Manage all your summaries in one place  
- 📱 **Responsive Design** – Optimized for both desktop & mobile  
- 🔄 **Real-Time Updates** – Automatic revalidation for fresh content  
- 🚀 **Production-Ready Deployment** – Optimized build, ready for scale  
- 🔔 **Toast Notifications** – Instant feedback for uploads & errors  
- 📈 **Performance Optimized** – Fast load times and efficient processing  
- 🔍 **SEO-Friendly** – Summaries designed for search visibility  
- 🗂️ **Markdown Export** – Convert summaries into blog posts with ease  

---

## 🛠️ Core Technologies

- 🚀 **[Next.js 15 (App Router)](https://nextjs.org/)** – SSR, routing, API endpoints, Server Components & Actions  
- 🔑 **[Clerk](https://clerk.com/)** – Authentication (Passkeys, GitHub, Google Sign-in)  
- 🤖 **GPT-4** – Contextual summarization with emoji-enhanced output  
- 🧠 **[LangChain](https://www.langchain.com/)** – PDF parsing, text extraction, and chunking  
- 🎨 **[ShadCN UI](https://ui.shadcn.com/)** – Accessible, customizable React components  
- 💾 **[NeonDB](https://neon.tech/)** – Serverless PostgreSQL database  
- 📤 **[UploadThing](https://uploadthing.com/)** – Secure PDF uploads (up to 32MB)  
- 🔔 **[Sonner](https://sonner.emilkowal.ski/)** – Toast notifications  
- 📜 **TypeScript** – Strong typing and better DX  
- 💅 **TailwindCSS v4** – Utility-first styling (upgraded from v3 → v4)  
- 🚀 **[Vercel](https://vercel.com/)** – Production hosting & deployment  

---

## 📂 Project Structure

```bash
summarizerly/
├── app/                # Next.js App Router pages & layouts
├── components/         # UI components (ShadCN + custom)
├── lib/                # Utility functions, database, LangChain, AI integrations
├── actions/            # Server Actions
├── utils/              # Helper utilities
├── public/             # Static assets
├── schema.sql          # Database schema
├── vercel.json         # Deployment config
└── README.md
