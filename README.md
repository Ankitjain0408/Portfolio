# Ankit Jain - Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

This portfolio showcases my projects, skills, experience, certificates, resume, and contact information with smooth animations and a clean UI in both dark and light themes.

## Features

- Responsive single-page portfolio layout
- Animated hero section and subtle background effects
- Projects section with live demo and GitHub links
- Professional experience and skills sections
- Certificates section with downloadable/viewable files
- Contact form with toast notifications (success/error)
- Dark/light theme support
- Fast build and deployment-ready structure

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI, shadcn/ui
- **Notifications:** Sonner
- **Routing:** React Router DOM
- **Testing:** Vitest, Testing Library, Playwright (config included)

## Project Structure

```bash
Portfolio/
├─ public/              # static assets (profile, resume, certificates, favicon)
├─ src/
│  ├─ components/       # UI sections and reusable components
│  ├─ constants/        # profile links and constants
│  ├─ hooks/            # custom hooks
│  ├─ lib/              # utility functions
│  ├─ pages/            # route pages
│  └─ test/             # test setup/examples
├─ index.html
├─ package.json
└─ tailwind.config.ts

Getting Started
1) Clone the repository
git clone https://github.com/Ankitjain0408/Portfolio.git
cd Portfolio
2) Install dependencies
npm install
3) Start development server
npm run dev
4) Build for production
npm run build
5) Preview production build
npm run preview
Available Scripts
npm run dev - Start local dev server
npm run build - Create production build
npm run preview - Preview production build
npm run lint - Run ESLint
npm run test - Run tests once
npm run test:watch - Run tests in watch mode
Contact Form Setup
This project uses a backend-less contact form approach.
If you are using FormSubmit (or a similar service), update the destination email in the contact component and activate the form email once via the provider’s verification mail.

Customize Content
You can easily update:

Profile links and photo path in src/constants/profileLinks.ts
Section content in src/components/*Section.tsx
Global styles/theme in src/index.css
Meta tags and favicon in index.html and public/
Deployment
This project is Vite-based and can be deployed on:

Vercel
Netlify
GitHub Pages
Any static hosting service
Build command:

npm run build
Publish the dist/ folder.

Author
Ankit Jain
GitHub: https://github.com/Ankitjain0408

