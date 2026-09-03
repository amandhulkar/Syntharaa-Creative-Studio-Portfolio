# Syntharaa — Creative Studio Website

A premium, responsive single-page site for **Syntharaa**, an independent
creative studio shaping memorable brands, digital products, websites,
campaigns, and motion experiences.

Built with the Next.js App Router, Tailwind CSS, and Framer Motion.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- JavaScript and JSX
- [Tailwind CSS](https://tailwindcss.com) 3
- [Framer Motion](https://www.framer.com/motion) — restrained, reduced-motion aware
- [React Icons](https://react-icons.vercel.app)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
syntharaa-website/
  |- app/
    |-- globals.css
    |-- icon.svg
    |-- layout.jsx
    |-- page.jsx
  |- components/
    |-- main/
    |   |-- about.jsx
    |   |-- contact.jsx
    |   |-- process.jsx
    |   |-- footer.jsx
    |   |-- hero.jsx
    |   |-- projects.jsx
    |   |-- skills.jsx
    |-- sub/
    |   |-- contact-form.jsx
    |   |-- hero-content.jsx
    |   |-- project-card.jsx
    |   |-- service-icon.jsx
  |- config/
    |-- index.js
  |- constants/
    |-- index.js
  |- lib/
    |-- motion.js
    |-- utils.js
  |- public/
    |-- projects/
  |- eslint.config.mjs
  |- package.json
  |- tailwind.config.js
  |- jsconfig.json
```

## Content model

All copy, navigation, services, process steps, case studies, and social
placeholders live in `constants/index.js`. Edit there to update the studio
voice, case studies, and contact details.

## Inquiry form

The design-inquiry form validates inline and opens the visitor's mail client
with a pre-filled `mailto:` draft addressed to the studio email. No data is
stored on this site.

## License

MIT — see [LICENSE](./LICENSE). The original template attribution is
preserved in that license file.