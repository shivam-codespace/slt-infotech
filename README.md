# SLT Info Tech website

Marketing site for SLT Info Tech, built with React 19, React Router and Vite. A small Express server (or a Vercel function in production) sends the Start Collaboration form by email.

## Running locally

```bash
npm install
npm run dev       # site on http://localhost:5173 (proxies /api to :4000)
npm run server    # API on http://localhost:4000 — needs .env (see .env.example)
npm run build     # production build into dist/
npm run start     # build, then serve dist/ and the API from the Express server
npm run lint
```

Copy `.env.example` to `.env` and fill in the SMTP settings so form submissions are delivered.

## Where the content lives

Most copy is kept in data files, so you can update text without touching layout code.

| What | File |
| --- | --- |
| Company email, location, social links, founders, review badges, headline stats | `src/data/site.js` |
| The nine services, their groups and the technology list | `src/data/services.js` |
| Projects / case-study cards | `src/data/projects.js` |
| Industries and the regulated-industries principles | `src/data/industries.js` |
| Team members and the "how we staff" section | `src/data/team.js` |
| Open roles, perks and hiring steps | `src/data/careers.js` |
| Blog articles (full text) | `src/data/posts.js` |
| Testimonials | `src/components/TestimonialCarousel.jsx` |
| Client names in the scrolling strip | `src/components/LogoMarquee.jsx` |
| Review-platform profiles (About page) | `src/components/Recognition.jsx` |
| Privacy Policy / Terms of Service | `src/pages/Privacy.jsx`, `src/pages/Terms.jsx` |

Search the codebase for `PLACEHOLDER` to find every value that still needs real company details before launch.

## Styling

Design tokens (colors, radii, shadows, fonts, spacing) are CSS variables at the top of `src/index.css`; component styles are in `src/App.css`. Icons come from [lucide-react](https://lucide.dev).

Fonts are self-hosted through Fontsource: **Bricolage Grotesque** for headings, **Geist** for body text, and **Instrument Serif** italic for accent words. Wrap one word of a heading in `<em>` to get the gradient serif accent, e.g. `<h2>Teams that <em>ship</em> with us.</h2>`.
