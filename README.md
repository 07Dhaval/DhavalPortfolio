# VD Portfolio — Dhaval Valvi

Complete React + Vite + Tailwind CSS source for the dark charcoal and lime portfolio. Includes all 11 project screenshots, laptop mockups, the VD logo, work filters, project details, experience, education, contact links, downloadable resume, reveal animations, a custom cursor, scroll progress and section navigation.

## Run in VS Code on Windows

1. Clone this repository:

```bash
git clone https://github.com/07Dhaval/DhavalPortfolio.git
cd DhavalPortfolio
```

2. Open the `DhavalPortfolio` folder in VS Code. This is the folder containing `package.json`.
3. Use Node.js 22.12 or newer.
4. Open **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

5. Open the localhost URL displayed in the terminal. Keep the terminal running while editing.

If Windows PowerShell reports that `npm.ps1` cannot run because scripts are disabled, use `npm.cmd install` and `npm.cmd run dev`. You can use `npm.cmd run build` and `npm.cmd run preview` the same way.

## Build for hosting

```bash
npm run build
```

Upload the **contents of `dist`** to your static hosting folder, such as Hostinger `public_html`.

To check the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
  main.jsx                  React entry point
  App.jsx                   Page composition and shared state
  index.css                 Tailwind import, design and responsive styles
  components/
    Navbar.jsx              VD logo and mobile navigation
    Hero.jsx                Hero, portrait and 3D tilt
    TechStrip.jsx           Technology strip
    Projects.jsx            All 11 projects and category filters
    DeviceMockup.jsx        Screenshot-based 3D laptop
    ProjectModal.jsx        Project details and available live links
    About.jsx               About and resume download
    Skills.jsx              Skill groups
    Experience.jsx          Work experience and education
    Services.jsx            Services and FAQ
    Contact.jsx             Email, copy email and phone
    Footer.jsx              VD branding and back to top
    MotionCursor.jsx        Interactive trailing cursor
    ScrollGuide.jsx         Scroll progress and active sections
  data/
    portfolio.js            Project, experience, skill and section data
  utils/
    tilt.js                 Pointer-driven perspective effect
public/
  images/                   All supplied project screenshots and portrait
  Dhaval_Valvi_Resume.pdf    Resume download
index.html
package.json
package-lock.json
vite.config.js
```

## Make changes

- Project titles, screenshots, descriptions and live links: `src/data/portfolio.js`.
- Experience and skills: `src/data/portfolio.js`.
- Education: `src/components/Experience.jsx`.
- Personal introduction: `src/components/Hero.jsx` and `About.jsx`.
- Email and phone: `Contact.jsx`; the copy-email value is in `App.jsx`.
- Theme, colors, spacing, mockup depth and mobile breakpoints: `src/index.css`.
- Replace the PDF in `public` to update the resume.

Tailwind CSS v4 is configured through `@tailwindcss/vite` in `vite.config.js` and `@import "tailwindcss"` in `src/index.css`. A `tailwind.config.js` file is not required for this configuration. The bespoke visual design uses custom CSS alongside Tailwind utilities.

## Interaction notes

The custom cursor activates after a desktop mouse moves into the page. It restores the native cursor when the page loses focus, during keyboard navigation, or when touch input or reduced motion is active. Mouse and reduced-motion preference changes apply immediately. Pointer tilt is disabled on touch input. Reduced-motion preferences disable nonessential animations. Browsers and operating systems control some native scrollbar behavior. Email and phone links open the visitor's own apps; no email service or server-side contact form is required.

Only projects with supplied live URLs have live website buttons. Other projects show their supplied screenshots and project details.

Dependencies are declared in `package.json` and locked in `package-lock.json`. Run `npm install` to download dependencies and `npm run build` to generate the production `dist` folder. Dependencies, build output and temporary preview files are excluded from Git.
