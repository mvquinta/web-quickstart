x# web-quickstart - Personal Template

#### v1.0.0

Repositorie with basic templates to quickstart a web project.
These are setup to my preferences using the packages that I most use, project structure, folder and file naming, etc.

## Current Templates

**Nuxt:** Nuxt.js, TailwindCSS, Nuxt/ui, nuxtjs/seo, eslint, antfu/estlint-config
-   [How to use / Install](#Nuxt-Starter-Details)

## Next Templates

- Nuxt Typescript
- Next**
- Next Typescript

## Nuxt Starter Details

- NuxtUI: already install and sets up @nuxt/icon, @nuxtjs/tailwindcss and @nuxtjs/color-mode.
- Nuxt SEO: basic setup with site information, manifest, robots.txt file and favicon images
- Fonts: Using as example Quicksand and Inter. Files are on public/fonts folder. Fontface added at main.css file. And configuration on tailwind.config.ts file

- Pages: Layout Default; Index; Error;

- Components: Folder structure, assets, CSS, nuxtconfig, public folder usign favicon and logo from mqddev web as example.

- Lint: eslint for lint and formating. Based on @antfu/eslint-config. Esling, using @nuxt/eslint and @antfu/eslint-config. Also, created a .vscode/settings.json (I use this since I do not want to add them globaly).

Important:
- Make sure to substitute images with new ones. Use a site like realfavicongenerator.net
- Also, make sure to look into all your files by strin 'web-quickstart' and replace it.
- On nuxt.config/schemaOrg, make sure identity is right for your new website. https://schema.org/docs/schemas.html

Look at the
[Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to
learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the
[deployment documentation](https://nuxt.com/docs/getting-started/deployment) for
more information.
