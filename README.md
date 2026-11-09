# Shavim Photography website (React + Vite + Tailwind)

## Run locally
    npm install
    npm run dev

## Add / remove / reorder photos
1. Save files in `public/images/` (about 1600px wide, under 500 KB, descriptive names like `wildlife-lion-ngorongoro.jpg`).
2. Edit the `IMAGES` list in `src/data/site.js`. One line per photo: file, category, title, alt, optional `featured:true`. Delete a line to remove, reorder lines to reorder.
3. Special files: `hero.jpg` (homepage hero) and `photographer-portrait.jpg` (About). Missing photos show an elegant placeholder.

## Make the booking form work
Create a free Formspree (or Web3Forms) form and paste its endpoint into `formEndpoint` in `src/data/site.js`. Until then the form shows a "not connected" message instead of pretending to send.

## Project structure
    index.html            page shell + SEO + structured data
    src/                  JavaScript (React), CSS and components (source)
      data/site.js        all editable content: photos, testimonials, services, form endpoint
    public/images/        your photos, robots.txt, sitemap.xml
    .github/workflows/    automatic deployment
    dist/                 the finished HTML/JS/CSS folders. Vite creates it automatically on build; do not edit or upload it by hand.

## Testimonials
Edit `TESTIMONIALS` in `src/data/site.js` with real client feedback (with permission).

## Deploy to GitHub Pages
1. Replace every `YOURUSERNAME` in `index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/data/site.js`.
2. If your repo is NOT named `username.github.io`, set `base:'/repo-name/'` in `vite.config.js`.
3. Create a GitHub repo and upload ALL project files (including the hidden `.github` folder). Easiest: use GitHub Desktop or `git push`; the web uploader often skips hidden folders.
4. In the repo go to Settings > Pages > Build and deployment > Source: choose **GitHub Actions**.
5. Every push to `main` now builds and publishes automatically. Watch progress in the Actions tab.
