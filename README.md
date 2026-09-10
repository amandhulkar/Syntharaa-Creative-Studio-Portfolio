# Syntharaa — Creative Studio Website

A responsive, project-led website for **Syntharaa**, an independent creative studio shaping brand identities, digital products, websites, campaigns, and motion experiences.

Built with the Next.js App Router, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- Next.js 16 (App Router)
- React 19
- JavaScript and JSX
- Tailwind CSS 3
- Framer Motion with reduced-motion support

## Edit studio copy

Public studio details and all core copy live in `constants/index.js`:

- `STUDIO`: name, contact email, availability, location, and response time.
- `STUDIO_COPY`: hero, work, services, and studio/about copy.
- `SERVICES`, `PROCESS_STEPS`, and `STUDIO_MODEL`: supporting section content.

When the final Syntharaa concept text is ready, update `STUDIO_COPY`. Components should not need to be rewritten.

## Add a real project

Projects are controlled by the `CASE_STUDIES` array in `constants/index.js`.

1. Create a folder such as `public/projects/my-project/`.
2. Add an optimized cover image and any optional gallery images. WebP, AVIF, JPEG, PNG, and SVG work with the current setup. A landscape cover around 1600 × 1000 px (8:5) is a reliable default; gallery media can use its natural aspect ratio.
3. Copy the example below into `CASE_STUDIES` and replace every value with accurate project information.
4. Set `status` to a truthful label such as `Client project`, `Independent project`, or `Self-initiated concept`. Omit it only if no disclosure is needed.
5. Include `result` only when the outcome is known and supportable. Include `url` only when the destination is public.
6. Write alt text that describes what is visible in the image rather than repeating the project name.

```js
{
  slug: "my-project",
  name: "My Project",
  type: "Brand identity · Website",
  year: "2026",
  summary: "A concise overview of the project and its purpose.",
  challenge: "The real problem or opportunity the project needed to address.",
  approach: "How Syntharaa responded through strategy and design.",
  services: ["Strategy", "Identity", "Web design"],
  cover: "/projects/my-project/cover.webp",
  coverAlt: "Description of the visible project artwork or interface",
  status: "Client project",
  featured: true,
  gallery: [
    {
      src: "/projects/my-project/detail-01.webp",
      alt: "Description of the first detail image",
    },
  ],
  result: "Optional truthful outcome supplied by the client or project owner.",
  url: "https://example.com",
}
```

### Required project fields

`slug`, `name`, `type`, `year`, `summary`, `challenge`, `approach`, `services`, `cover`, and `coverAlt`.

### Optional project fields

- `status`: visible disclosure/category label.
- `featured`: set one project to `true` for the hero feature; the first project is the fallback.
- `gallery`: reserved for additional case-study imagery.
- `result`: rendered only when present, so unknown results are never fabricated.
- `url`: changes the project action to a public “View live project” link.

Project numbering and totals are generated from the array, so projects can be added, removed, or reordered without changing component markup.

## Inquiry form

The inquiry form validates inline and opens the visitor’s email client with a pre-filled `mailto:` draft addressed to `amandhulkar0079@gmail.com`. The website does not store or automatically send form data.

## Project structure

```text
app/                 Layout, page composition, and global styles
components/main/     Main portfolio sections
components/sub/      Reusable section components
components/providers Motion accessibility provider
constants/           Centralized copy and project data
lib/                 Motion and class-name utilities
public/projects/     Project media
```

## License

MIT — see [LICENSE](./LICENSE). The original template attribution is preserved in that license file.
