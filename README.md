# Waleed Alghaithi - Portfolio v2

Personal portfolio website with kinetic typography, animated skill bars, dark/light mode, and automatic low-power device fallbacks.

## Live Site

**[waleedA13.github.io/portfolio-v2](https://waleedA13.github.io/portfolio-v2)**

## Features

- Kinetic typography with purple-to-white color sweep on headings
- Typing effect that cycles through roles with correct a/an grammar
- Animated skill bars triggered on scroll via IntersectionObserver
- Dark/light mode toggle persisted in localStorage
- GitHub contribution heatmap
- "Currently working on" live status badge
- Printable resume page (opens in new tab)
- Three rendering tiers: full effects, reduced motion (OS setting), low-power (auto-detected)

## Structure

```
portfolio-v2/
├── index.html          # Content and semantic markup
├── style.css           # Design tokens, layout, animations, and fallbacks
├── script.js           # Navigation, typing effect, scroll reveal, theme toggle, perf detection
├── assets/
│   ├── profile.jpg     # Profile photo
│   └── resume.html     # Standalone printable resume
└── README.md
```

## Run Locally

Open `index.html` in any browser. No dependencies or build tools needed.

## Links

- [GitHub](https://github.com/waleedA13)
- [LinkedIn](https://linkedin.com/in/waleedalghaithi)
