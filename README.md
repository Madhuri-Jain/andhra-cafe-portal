# Andhra Cafe Website

A modern, responsive, and elegant café website built using **React**, **Vite**, and **Tailwind CSS**. This is a demo project for showcasing the brand identity and offerings of Andhra Cafe, including dynamic visuals and location features.

---

## 🔗 Live Preview

> Coming soon – can be hosted using Vercel or AWS 

---

## 📸 Features

- 🎥 **Hero Video Reel** with mobile carousel support
  - Auto-playing vertical videos
  - Responsive layout: carousel on mobile, static layout on desktop
  - Dot indicators and swipe functionality
- 📍 **Cafe Location Map**
  - Uses `react-leaflet` to display café location
  - Optional: detect and show user’s location
- 🍽️ **Menu Links & Navigation**
  - Sticky header with smooth scrolling
- 📱 **Instagram Integration**
  - Link to live Instagram page
- 🦶 **Professional Footer**
  - Brand logo / name
  - About, Careers, Contact links
  - Social media icons
- 🎨 Custom branding styles with Tailwind
  - Color theme: `cafeBrown (#332411)`
  - Cursive font for brand text

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Leaflet](https://react-leaflet.js.org/)

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
git clone https://github.com/Madhuri-Jain/andhra-cafe-portal.git
cd andhra-cafe-portal
npm install
npm run dev
```

### Folder Structure
```bash
├── public/
├── src/
│   ├── assets/
│   │   ├── videos/         # All vertical video clips
|   |   |── images/
│   │   └── logo.svg        # Café logo
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── HeroVideoReel.jsx
│   ├── pages/
│   │   └── HomePage.jsx    # Main landing page layout
│   └── App.jsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

### To-Do / Coming Soon
- Implement React Router and finalize all internal navigation links
- Set up development tools: ESLint and Prettier for code consistency
- Optimize media (images/videos) for web — consider lightweight formats or hosting on S3 (TBD)
- Refactor static content into dynamic variables wherever possible
- Integrate with backend APIs (to be developed using FastAPI) (TBD)
- Set up unit testing with Vitest
- Expand and enrich the Menu section with detailed items
- Add a Testimonials section to showcase customer feedback
- Prepare for production deployment:
    - Configure separate environments (development and production)
    - Deploy to a public host (TBD — if AWS, CDK setup will also be included)

###  Contributing
This is a personal project for UI/UX experimentation. Contributions are welcome once the base is stable!

###  License
MIT – Free to use and adapt.
