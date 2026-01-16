# Setup and Installation Instructions

## Overview
This document provides step-by-step instructions for setting up and running the Personal Project Showcase App in your development environment.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Project Structure](#project-structure)
4. [Available Scripts](#available-scripts)
5. [Troubleshooting](#troubleshooting)
6. [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher (comes with Node.js)
- **Git**: Latest version
- **Code Editor**: VS Code recommended
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd portfolio-showcase
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

This will install:
- React and React DOM
- Vite (build tool)
- Vitest (testing framework)
- React Testing Library
- All other dependencies

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed correctly
npm list

# You should see a tree of installed packages without errors
```

---

## Project Structure

### Detailed Folder Layout

```
portfolio-showcase/

 src/
    components/                 # React components
       ProjectForm.jsx         # Form for adding projects
       ProjectForm.css
       ProjectList.jsx         # List of projects
       ProjectList.css
       ProjectCard.jsx         # Individual project card
       ProjectCard.css
       SearchBar.jsx           # Search input
       SearchBar.css
   
    __tests__/                  # Test files
       App.test.jsx            # App integration tests
       ProjectForm.test.jsx    # ProjectForm component tests
       ProjectList.test.jsx    # ProjectList component tests
       ProjectCard.test.jsx    # ProjectCard component tests
       SearchBar.test.jsx      # SearchBar component tests
   
    test/
       setup.js                # Test configuration
   
    App.jsx                     # Main App component
    App.css                     # App styles
    main.jsx                    # Application entry point
    index.css                   # Global styles
    assets/
        react.svg

 public/
    vite.svg

 dist/                           # Build output (generated)
 node_modules/                   # Dependencies (generated)

 .gitignore                      # Git ignore file
 README.md                       # Project documentation
 COMPONENT_DOCUMENTATION.md      # Component details
 SETUP_INSTRUCTIONS.md           # This file
 package.json                    # Project dependencies
 package-lock.json               # Locked dependency versions
 index.html                      # HTML entry point
 vite.config.js                  # Vite configuration
 vitest.config.js                # Vitest configuration

```

---

## Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# This will:
# - Start a local dev server on http://localhost:5173/
# - Enable hot module replacement (HMR)
# - Show compilation errors in terminal and browser
```

### Building

```bash
# Build for production
npm run build

# This will:
# - Create optimized production build in /dist folder
# - Minify CSS and JavaScript
# - Generate source maps
# - Show build size in terminal
```

### Preview Production Build

```bash
# Start preview server for production build
npm run preview

# This will:
# - Serve the dist/ folder locally
# - Show how app performs in production
```

### Testing

```bash
# Run all tests once
npm test

# Run tests in watch mode (auto-rerun on file change)
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

### Linting (Optional)

```bash
# ESLint is configured but optional to run
npm run lint
```

---

## Getting Started - Step by Step

### 1. Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v7.3.1  ready in 1234 ms

    Local:   http://localhost:5173/
    Network: use --host to expose
    press h + enter to show help
```

### 2. Open in Browser

Navigate to `http://localhost:5173/` in your web browser.

You should see:
- Header: "Personal Project Showcase App"
- Add Project form with title and description fields
- Search box
- 3 initial projects in a grid layout

### 3. Test Functionality

1. **Add a Project**:
   - Enter a title in the "Title" field
   - Enter a description in the "Description" field
   - Click "Add" button
   - New project should appear in the list

2. **Search Projects**:
   - Type in the search box
   - Projects should filter in real-time
   - Clear search to see all projects

3. **Delete a Project**:
   - Click the "X" button on any project card
   - Project should be removed from the list

### 4. Run Tests

```bash
npm test
```

**Expected Output:**
```
 src/__tests__/App.test.jsx (6)
 src/__tests__/ProjectForm.test.jsx (4)
 src/__tests__/ProjectList.test.jsx (3)
 src/__tests__/ProjectCard.test.jsx (3)
 src/__tests__/SearchBar.test.jsx (3)

19 passed (42ms)
```

### 5. Build for Production

```bash
npm run build
```

**Expected Output:**
```
vite v7.3.1 building client environment for production...
 38 modules transformed.
dist/index.html                   0.47 kB
dist/assets/index-P66VCvWu.css    4.48 kB
dist/assets/index-GI5WlbUP.js   196.30 kB
 built in 2.50s
```

---

## Development Workflow

### Hot Module Replacement (HMR)

When you run `npm run dev`, the application automatically reloads when you:
- Modify component files
- Change CSS styles
- Update imports

**No manual refresh needed!**

### Debugging

#### Using VS Code Debugger

1. Install the "Debugger for Firefox" or "Debugger for Chrome" extension
2. Add breakpoints in your code (click on line number)
3. Press F5 or go to Run > Start Debugging
4. Step through your code and inspect variables

#### Using Browser DevTools

1. Open your browser (F12 key)
2. Go to Console tab to see errors/warnings
3. Go to Elements tab to inspect HTML
4. Go to Application tab to check localStorage
5. Use React DevTools browser extension for component inspection

#### Using Vitest UI

```bash
npm run test:ui
```

Opens a visual interface to run and debug tests.

---

## Troubleshooting

### Issue: Port 5173 is already in use

**Solution:**
```bash
# Kill the process using port 5173
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port:
npm run dev -- --port 3000
```

### Issue: Module not found errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install

# Or on Windows:
rmdir /s /q node_modules
npm install
```

### Issue: Tests are failing

**Solution:**
1. Make sure all dependencies are installed: `npm install`
2. Clear test cache: `npm test -- --clearCache`
3. Run tests in watch mode: `npm test -- --watch`
4. Check test output for specific errors

### Issue: CSS not loading properly

**Solution:**
- Ensure all CSS imports in JSX files match the CSS filenames
- Check that CSS files are in the correct folder
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server

### Issue: Git warnings about LF/CRLF

This is normal on Windows. To avoid these warnings:

```bash
# Configure Git to handle line endings
git config --global core.safecrlf false
```

---

## Environment Configuration

### Environment Variables

Create a `.env` file in the root directory if needed:

```env
# Example environment variables
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Personal Project Showcase
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Package Management

### Adding Dependencies

```bash
# Install a new package
npm install package-name

# Install a dev dependency
npm install --save-dev package-name
```

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update a specific package
npm update package-name
```

---

## Performance Optimization

### Analyze Bundle Size

```bash
# Build and analyze bundle
npm run build

# Check the size of the output files
ls -lh dist/assets/
```

### Production Checklist

- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] CSS is minified in production build
- [ ] JavaScript is minified
- [ ] Images are optimized
- [ ] Build size is reasonable

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Next Steps

After successful setup:

1. **Explore the Code**:
   - Open `src/App.jsx` to understand the component structure
   - Review component files in `src/components/`
   - Study the tests in `src/__tests__/`

2. **Make Changes**:
   - Add new features (edit functionality, categories, etc.)
   - Improve styling and responsive design
   - Add more comprehensive tests

3. **Deploy**:
   - Push code to GitHub
   - Deploy on Vercel, Netlify, or GitHub Pages
   - See [Deployment Guide](#deployment-guide) below

4. **Learn More**:
   - Read [README.md](README.md)
   - Read [COMPONENT_DOCUMENTATION.md](COMPONENT_DOCUMENTATION.md)
   - Check React documentation: https://react.dev
   - Check Vite documentation: https://vitejs.dev

---

## Deployment Guide

### Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Deploy! (No configuration needed)

### Deploy to Netlify

1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

### Deploy to GitHub Pages

```bash
# Update package.json with homepage
# Add to package.json: "homepage": "https://username.github.io/portfolio-showcase"

# Install gh-pages package
npm install --save-dev gh-pages

# Add scripts to package.json:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## Additional Resources

- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **Vitest Documentation**: https://vitest.dev
- **React Testing Library**: https://testing-library.com/react
- **MDN Web Docs**: https://developer.mozilla.org

---

## Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review error messages in terminal and browser console
3. Check the documentation files
4. Ask for help in the project repository (GitHub Issues)

---

## Summary

You now have:
-  Installed all dependencies
-  Understood the project structure
-  Learned how to run the development server
-  Learned how to run tests
-  Know how to build for production
-  Have troubleshooting guidance

**Happy coding!** 

