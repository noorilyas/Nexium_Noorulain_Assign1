# ✨ Quote Generator – Nexium Internship Assignment 1

This is a responsive and aesthetic Quote Generator Web App built with Next.js 14, Tailwind CSS, and ShadCN UI. It is part of the Nexium AI-First Web Development Internship Assignment 1.

### 🚀 Live Demo

🔗 [Click here to open deployed app](https://nexium-noorulain-assign1.vercel.app)

---

## ✅ Features

- Category-based quote generation  
- Image-based category selection (no text buttons)  
- Responsive, mobile-friendly design  
- Beautiful UI with hover effects  
- Instant routing using Next.js App Router  

---

## 📁 Folder Structure

```
/public/images
└── Contains all category images (e.g., life.jpeg, love.jpg, success.png, etc.)

/src/app/internship/assignment-1
├── page.js                  → Entry page that loads the QuoteForm component
├── data/
│   └── quotes.js            → Contains all quote data by category
├── components/
│   └── QuoteForm.jsx        → Renders image-based categories for selection
└── quote/
    └── [topic]/
        └── page.jsx         → Dynamically renders quotes for the selected topic
```

---

## 🧠 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [ShadCN UI](https://ui.shadcn.com)  
- [Vercel](https://vercel.com/) for deployment  

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/noorilyas/Nexium_Noorulain_Assign1.git
cd Nexium_Noorulain_Assign1
pnpm install
pnpm dev
```

---

## 🤝 Author

**Noorulain Ilyas**  
Intern at Nexium – AI-First Web Development
