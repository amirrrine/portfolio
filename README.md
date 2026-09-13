# Portfolio

A modern, responsive developer portfolio built with **Next.js**, **Tailwind CSS**, and **GSAP** animations. All content is managed from a single JSON file — edit, build, deploy.

## ✨ Features

- ⚡ Next.js static-site generator + React 18
- 🎨 Tailwind CSS (responsive, mobile-first)
- ✨ GSAP scroll/stagger animations
- 🌗 Optional dark / light theme toggle
- 📄 Resume page with personal CV image
- ✍️ Markdown-powered blog (optional)
- 🖱️ Optional custom cursor
- 🌐 SEO meta tags (title, description, Open Graph)

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run development server
npm run dev

# create a production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Requires **Node.js 14+**.

## 🎨 Customization

Everything you need to edit lives in **`data/portfolio.json`**:

| Field | Purpose |
| --- | --- |
| `name` | Your name (shown in the header) |
| `headerTaglineOne..Four` | Hero headlines |
| `socials` | GitHub / email / phone links |
| `projects` | Cards rendered in the **Work** section |
| `services` | Cards rendered in the **Services** section |
| `aboutpara` | The **About** paragraph |
| `resume` | Resume URL + image shown on `/resume` |
| `showBlog` | Show/hide the blog section |
| `showResume` | Show/hide the resume page & link |
| `darkMode` | Enable the theme toggle |
| `showCursor` | Enable the custom cursor |

### Images

- Project/resume images can be remote URLs or local files in `public/images/`.
- Replace the favicon at `public/favicon.svg`.

## 📁 Project Structure

```
├── animations/        # GSAP animation helpers
├── components/        # Reusable UI components
├── data/
│   └── portfolio.json # ⭐ All site content
├── pages/             # Next.js pages (/, /resume, /blog)
├── public/            # Static assets & images
├── styles/            # Global + markdown styles
├── utils/             # Markdown / date / API helpers
└── _posts/            # Blog posts (Markdown + frontmatter)
```

## 📝 Blog

Blog posts are Markdown files in `_posts/` with optional frontmatter
(`title`, `tagline`, `preview`, `image`, `date`). Enable the blog by setting
`"showBlog": true` in `data/portfolio.json`.

## ☁️ Deploy

### Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amirrrine/portfolio)

Or from the CLI:

```bash
npm i -g vercel
vercel
```

### Netlify / GitHub Pages

Run `npm run build` and publish the generated `out/` directory.

## 🛠 Tech Stack

[Next.js 12](https://nextjs.org) · [React 18](https://reactjs.org) ·
[Tailwind CSS 3](https://tailwindcss.com) · [GSAP](https://greensock.com/gsap) ·
[next-themes](https://github.com/pacocoursey/next-themes)

## 📄 License

[MIT](./LICENSE)