# Phillip Lam Vu - Portfolio Website

A modern, minimalist portfolio website for a full-stack developer. Built with Next.js, Tailwind CSS, and deployed on Vercel.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Minimalist Aesthetic**: Clean, professional layout with plenty of white space
- **Smooth Animations**: Subtle fade-ins and transitions
- **Multiple Pages**:
  - Home: Introduction and featured projects
  - About: Professional summary and experience
  - Projects: Detailed project showcase with full details
  - Contact: Contact form and social links
- **SEO Optimized**: Metadata and semantic HTML
- **Dark Footer**: Professional footer with links and copyright
- **Fast Loading**: Optimized for performance

## Tech Stack

- **Frontend**: React 18, Next.js 14
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel
- **Package Manager**: npm

## Project Structure
# Phillip Lam Vu — Portfolio Website


## Features

- Responsive, mobile-first layout
- Minimalist aesthetic with subtle animations
- Pages: Home, About, Projects
- Resume preview and download 

## Tech Stack

- Frontend: React 18, Next.js 14 (App Router)
- Styling: Tailwind CSS 3
- Package manager: npm
- Deployment: Vercel

## Project Structure (relevant parts)

```
├── app/
│   ├── components/        # Reusable components (Navbar, Footer, ProjectCard, SkillBadge)
│   ├── (pages)/           # App-router pages (home, about, projects, contact)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/                # Static assets served at / (images, PDFs)
│   ├── LinkedInPhoto.jpg
│   ├── NextGenerationFocus.png
│   ├── HVMATLPicture.jpg
│   ├── IMG_6958.jpeg
│   └── Resume-Phillip_Vu.pdf
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open http://localhost:3000

## Available Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Deployment

Deploy to Vercel by connecting your repository. Vercel auto-detects Next.js and sets sensible defaults.

## Troubleshooting

- If images don't load, verify the file exists in `public/` and that you use an absolute path (e.g. `/LinkedInPhoto.jpg`).
- Use `npm run build` to catch production-only issues.

## License

MIT

## Contact

- Email: phillipvu3635@gmail.com
- GitHub: https://github.com/PVu23
- LinkedIn: https://www.linkedin.com/in/phillip-vu-48520b352
