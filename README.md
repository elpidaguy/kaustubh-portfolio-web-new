# Kaustubh Joshi - Portfolio

A professional portfolio website for Kaustubh Joshi, a senior software engineer.

## Features
- Built with **Vite + React 18 + TypeScript**
- Styled with **Tailwind CSS**
- Animations with **Framer Motion**
- Icons from **lucide-react**
- Dark/light mode toggle
- Responsive design

## Local Setup

### Prerequisites
- Node.js (v20 recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/elpidaguy/elpidaguy.github.io.git
   cd elpidaguy.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build
Build the project for production:
```bash
npm run build
```

### Deployment
The project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `main` branch.

## Project Structure
```
src/
  components/   # React components
  data/         # Profile data
  hooks/        # Custom hooks
  lib/          # Utility functions
  App.tsx       # Main app component
  main.tsx      # Entry point
public/        # Static files
.github/       # GitHub Actions workflows
```