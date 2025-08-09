# Project Structure - Sri Velmurugan Transports

## 📁 Clean Project Structure

```
velmurugan/
└── velmurugan-ui/                    # Main React application
    ├── src/                          # Source code directory
    │   ├── components/               # Reusable React components
    │   │   ├── ServiceCard.tsx      # Service card component
    │   │   └── ContactForm.tsx      # Contact form component
    │   ├── App.tsx                  # Main application component
    │   ├── App.css                  # Global styles
    │   ├── App.test.tsx            # App component tests
    │   ├── index.tsx               # Application entry point
    │   ├── index.css               # Global CSS
    │   ├── logo.svg                # Company logo
    │   ├── react-app-env.d.ts      # TypeScript declarations
    │   ├── reportWebVitals.ts      # Performance monitoring
    │   ├── service-worker.ts        # PWA service worker
    │   ├── serviceWorkerRegistration.ts # Service worker registration
    │   └── setupTests.ts           # Test configuration
    ├── public/                      # Static assets
    │   ├── index.html              # Main HTML file
    │   ├── favicon.ico             # Website icon
    │   ├── logo192.png             # App logo (192px)
    │   ├── logo512.png             # App logo (512px)
    │   ├── manifest.json           # PWA manifest
    │   └── robots.txt              # SEO robots file
    ├── node_modules/                # Dependencies (auto-generated)
    ├── .git/                       # Git repository
    ├── .gitignore                  # Git ignore rules
    ├── package.json                # Project dependencies and scripts
    ├── package-lock.json           # Dependency lock file
    ├── postcss.config.mjs          # PostCSS configuration
    ├── tailwind.config.js          # Tailwind CSS configuration
    ├── tsconfig.json               # TypeScript configuration
    └── README.md                   # Project documentation
```

## 🧹 Cleanup Summary

### Removed Duplicates:
- ❌ `package-lock.json` (duplicate in root directory)
- ❌ `node_modules/` (duplicate in root directory)

### Maintained Structure:
- ✅ All React application files in `velmurugan-ui/`
- ✅ Components properly organized in `src/components/`
- ✅ Static assets in `public/`
- ✅ Configuration files in root of `velmurugan-ui/`
- ✅ Dependencies only in `velmurugan-ui/node_modules/`

## 🎯 Key Directories

### `/src/components/`
Contains reusable React components:
- **ServiceCard.tsx** - Displays individual service cards with features
- **ContactForm.tsx** - Handles contact form with validation

### `/src/`
Main application source code:
- **App.tsx** - Main application component with service catalog
- **index.tsx** - Application entry point
- **App.css** - Global styles and custom CSS

### `/public/`
Static assets and HTML template:
- **index.html** - Main HTML template
- **manifest.json** - PWA configuration
- **favicon.ico** - Website icon

## 📦 Dependencies

All dependencies are properly managed in `velmurugan-ui/`:
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **PostCSS** for CSS processing
- **Development tools** for testing and building

## 🚀 Development

To work on the project:
1. Navigate to `velmurugan-ui/`
2. Run `npm install` (if not already done)
3. Run `npm start` to start development server
4. Run `npm run build` to build for production

## 📝 Notes

- All Git history is preserved in `.git/`
- Configuration files are properly placed
- No duplicate dependencies or files
- Clean separation between project and application 