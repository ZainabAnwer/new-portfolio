# Zainab Anwar - Personal Portfolio (Next.js & Tailwind CSS)

A modern, responsive, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. Converted from the original HTML/CSS/JavaScript codebase with rich aesthetics, glassmorphism, dynamic animations, dark/light theme support, and a brand new **Technical Skills & Toolkit** section.

---

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, and Tailwind CSS.
- **Brand New Technical Skills Section**:
  - Filterable by categories: *All*, *Frontend*, *Backend*, *Databases & Cloud*, *Mobile & Languages*.
  - Live search bar for instant skill and tag filtering.
  - Authentic, high-resolution SVG tech logos and proficiency indicators.
  - Detailed tags & descriptions for:
    - **JavaScript (JS)**
    - **React.js**
    - **Tailwind CSS**
    - **TypeScript**
    - **Node.js**
    - **Express.js**
    - **MongoDB**
    - **MySQL**
    - **Firebase**
    - **Python & Python Libraries (NumPy, Pandas, Matplotlib, Scikit-learn)**
    - **Dart**
    - **Flutter**
- **Dynamic Hero Section**:
  - Auto-typing animated text cycling through multiple developer titles.
  - Floating profile image with neon glowing pulse rings.
  - One-click CV / Resume download (`/resume.pdf`).
  - Direct links to LinkedIn, GitHub, and email.
- **About Me Section**:
  - Highlights BS Software Engineering studies at SMIU.
  - Interactive highlights cards and career objectives.
- **My Services**:
  - Web Development, UI/UX Design, App Development (iOS & Android).
- **Featured Projects**:
  - All original 6 projects integrated with screenshots, tech tags, descriptions, and live Vercel demo buttons:
    1. Calculator App
    2. Password Generator
    3. Task & Todo Manager
    4. Text to Speech Converter
    5. Securinc Enterprises
    6. GitHub User Info Card
- **Client & Peer Testimonials**:
  - Testimonial cards with client avatars and 5-star ratings.
- **Interactive Contact Form & Details**:
  - Responsive form with input validation, copy-to-clipboard email button, and status messaging.
- **Dark & Light Mode Support**:
  - Toggle between sleek dark developer mode and crisp light mode anytime.
---

## 🛠️ Project Structure

```text
portfolio/
├── public/                     # Static assets (images, CV PDF)
│   ├── assets/                 # Project screenshots and avatars
│   ├── resume.pdf              # Downloadable CV
│   └── Zainab Anwer (BSSE).pdf # Original CV file
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 import & custom glow effects
│   │   ├── layout.tsx          # Root layout with SEO metadata & theme
│   │   └── page.tsx            # Main assembled portfolio page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glass navbar with theme toggle
│   │   ├── Hero.tsx            # Hero with floating photo & typewriter
│   │   ├── About.tsx           # About me & SMIU education
│   │   ├── Skills.tsx          # Comprehensive requested skills section
│   │   ├── Services.tsx        # Services showcase cards
│   │   ├── Projects.tsx        # 6 featured projects with live links
│   │   ├── Testimonials.tsx    # Peer recommendations & 5-star cards
│   │   ├── Contact.tsx         # Interactive contact form & details
│   │   ├── Footer.tsx          # Footer with back-to-top & socials
│   │   └── TechIcons.tsx       # Pixel-perfect SVG tech brand icons
│   └── context/
│       └── ThemeContext.tsx    # Dark/Light mode state management
├── package.json
└── tsconfig.json
```

---

## 💻 How to Run Locally

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

4. To build for production:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploy to Vercel

This Next.js app is ready to deploy directly on Vercel:
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Click **Deploy**!
