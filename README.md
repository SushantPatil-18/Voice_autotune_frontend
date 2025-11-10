# Frontend - React + Vite Autotune Application# React + Vite



Modern React frontend for the Voice Autotune application, built with Vite and Tailwind CSS for blazing fast development and beautiful UI.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🚀 FeaturesCurrently, two official plugins are available:



- ⚡ **Vite** - Lightning fast HMR and build times- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- ⚛️ **React 18** - Modern React with hooks- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 🎨 **Tailwind CSS** - Utility-first styling

- 📱 **Responsive Design** - Works on all devices## React Compiler

- 🎵 **Drag & Drop** - Easy file uploading

- 🎤 **5 Presets** - Multiple autotune stylesThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- 🔊 **Audio Player** - In-browser playback

- 💾 **Download** - Get your processed files## Expanding the ESLint configuration



## 📋 PrerequisitesIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


- Node.js 14+ 
- npm or yarn

## 🛠️ Installation

```bash
cd frontend
npm install
```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── main.jsx           # Application entry point
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles with Tailwind
│   └── components/        # React components
│       ├── AudioPlayer.jsx
│       ├── FileUpload.jsx
│       ├── PresetSelector.jsx
│       ├── ProcessingStatus.jsx
│       └── ResultsDisplay.jsx
└── public/                # Static assets
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration

### API URL

By default, the app connects to the Flask backend at `http://localhost:5000`

To change this, edit `src/App.jsx`:

```javascript
const API_URL = 'http://localhost:5000/api';  // Change this
```

### Tailwind CSS

Customize theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }  // Your custom colors
    }
  }
}
```

## 🎵 Available Presets

1. **Natural** (0.5) - Subtle correction
2. **Moderate** (0.8) - Balanced professional sound
3. **T-Pain** (1.0) - Full robotic effect
4. **Chromatic** (0.8) - All 12 notes
5. **Minor Scale** (0.8) - A minor scale

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM rendering
- `axios` - HTTP client for API calls

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - PostCSS plugin
- `postcss` - CSS transformations

---

**Built with ⚡ Vite + ⚛️ React + 🎨 Tailwind CSS**

Enjoy creating professional autotuned vocals! 🎤✨
