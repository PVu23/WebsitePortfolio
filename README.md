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

```
├── app/
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillBadge.tsx
│   ├── (pages)/            # Next.js app router pages
│   │   ├── page.tsx        # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Personal Information

Edit the content in each page:
- [app/(pages)/page.tsx](app/%28pages%29/page.tsx) - Home page with name and tech stack
- [app/(pages)/about/page.tsx](app/%28pages%29/about/page.tsx) - About page with bio and experience
- [app/(pages)/projects/page.tsx](app/%28pages%29/projects/page.tsx) - Projects with details
- [app/(pages)/contact/page.tsx](app/%28pages%29/contact/page.tsx) - Contact information

### Add Project Screenshots

1. Place images in the `public/` directory
2. Update the `image` prop in ProjectCard components

### Modify Styling

Edit [tailwind.config.js](tailwind.config.js) to customize:
- Colors
- Fonts
- Animations
- Breakpoints

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Performance Optimization

- ✓ Image optimization with Next.js
- ✓ Automatic code splitting
- ✓ Static generation where possible
- ✓ CSS optimization with Tailwind
- ✓ SEO-friendly metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- Email: contact@example.com
- GitHub: [github.com](https://github.com)
- LinkedIn: [linkedin.com](https://linkedin.com)
