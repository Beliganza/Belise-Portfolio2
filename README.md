# Belise Ganza — Portfolio

A Vite + React portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL. Build for production with `npm run build`.

## Structure

```
src/
  components/
    Navbar.jsx        Sticky top nav + mobile menu
    Hero.jsx          "Muraho" hero + intro
    Work.jsx          Section shell + category filter tabs
    ProjectCard.jsx   One expandable project card
    Resume.jsx        Download button
    About.jsx         Photo + bio
    Contact.jsx       Get In Touch + links
    Footer.jsx
    Icon.jsx          Inline SVG icon set
  data/
    projects.js       ALL project content (edit here to add projects)
  App.jsx             Composes the sections
  index.jsx           Entry point
  style.scss          Design tokens + all styles
```

## Editing content

- **Add / edit a project:** edit the `projects` array in `src/data/projects.js`.
  Each project has a `category` of `"coding" | "data" | "research"`, which drives
  the Work filter tabs.
- **Resume file:** set `resumeUrl` in `src/components/Resume.jsx`.
- **Headshot:** set `photoUrl` in `src/components/About.jsx` (or import a local
  image such as `MYIMAGE.jpg`).
- **Email / LinkedIn:** set `emailUrl` and `linkedinUrl` in `src/components/Contact.jsx`.
- **Colors / fonts:** the tokens live at the top of `src/style.scss`.
