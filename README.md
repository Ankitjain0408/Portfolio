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
