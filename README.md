# 12 HTML Webpage Demos

A curated collection of **12 responsive HTML webpage demos** for learning, inspiration, UI practice, and fast preview on **GitHub Pages**.

## Overview

This repository is a small frontend showcase site built around 12 standalone demos.  
Each case lives in its own folder and can be opened independently, while the root `index.html` works as a polished gallery homepage for GitHub Pages.

The collection includes:

- responsive card grids
- Swiper carousels
- Bootstrap filter UI
- product gallery interactions
- before/after comparison
- modal video playback
- content switchers and editorial layouts

## Live structure

```text
12-html-webpage-demos/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── global.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── cover-01.png
│       ├── cover-02.png
│       ├── ...
│       └── cover-12.png
└── cases/
    ├── case-01/
    ├── case-02/
    ├── case-03/
    ├── case-04/
    ├── case-05/
    ├── case-06/
    ├── case-07/
    ├── case-08/
    ├── case-09/
    ├── case-10/
    ├── case-11/
    └── case-12/
```

## Demo list

| Case | Demo | Notes |
|---|---|---|
| 01 | Responsive Article Card Grid | article-style card layout |
| 02 | Industry Cards Responsive | hover motion cards |
| 03 | Integrations Grid Responsive | icon grid layout |
| 04 | Course Carousel | Swiper + tabs |
| 05 | Latest News Grid | responsive news cards |
| 06 | Bootstrap Filter Cards | filter-ready UI with Bootstrap |
| 07 | GTM AI Strategy Carousel | title-side navigation carousel |
| 08 | Product Detail Gallery | color switch, thumbnails, quantity JS |
| 09 | Brazilian Culture Editorial Grid | editorial image layout |
| 10 | Feature Image Switcher | click-to-switch content and image |
| 11 | Before / After Comparison | draggable comparison slider |
| 12 | Video Stories Slider | Swiper + modal video autoplay |

## Homepage features

The root homepage includes:

- responsive showcase layout
- search by title, keyword, or tag
- category filters
- large preview modal for cover images
- direct links to all 12 case folders
- GitHub Pages-friendly file structure

## Local preview

You can open the project locally in several ways.

### Option 1: VS Code Live Server

Open the root folder in VS Code and start Live Server from `index.html`.

### Option 2: Python static server

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `12-html-webpage-demos`
2. Push this project to the `main` branch
3. In GitHub, open `Settings -> Pages`
4. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`

After deployment, your site URL will usually look like this:

```text
https://YOUR-USERNAME.github.io/12-html-webpage-demos/
```

## How to customize

### Update homepage content

Edit the demo data in:

```text
assets/js/main.js
```

You can change:

- title
- description
- tags
- category
- cover image
- target link

### Replace cover images

Put updated screenshots into:

```text
assets/images/
```

Then update the image path in `assets/js/main.js`.

### Edit a specific case

Each demo is isolated in its own folder:

```text
cases/case-01/
cases/case-02/
...
cases/case-12/
```

Most cases use this simple structure:

```text
index.html
style.css
script.js
```

That makes it easy to maintain or replace a single demo without affecting the rest of the project.

## Tech notes

This collection primarily uses:

- HTML5
- CSS3
- Vanilla JavaScript
- Swiper
- Bootstrap 5

No build step is required for the root showcase page.

## Recommended GitHub repository description

```text
A collection of 12 responsive HTML webpage demos for learning, inspiration, and quick preview on GitHub Pages.
```

## Suggested future improvements

- add dark mode to the homepage
- add thumbnail lazy placeholders
- add category counts
- add a demo detail page for each case
- add language toggle for README and homepage copy

## License

Use this repository as a personal learning showcase, portfolio starter, or UI practice collection.
