# Welcome to Personal Project Showcase App

## Quick Start Guide

 Welcome! This is a **Personal Project Showcase App** - a modern React Single Page Application for displaying and managing projects.

### What You Need to Know

This project demonstrates **professional React development practices** including:
-  Component hierarchy and reusable components
-  State management with React hooks (useState)
-  Event handling for dynamic interactions
-  Props passing between components
-  Responsive CSS styling
-  Comprehensive unit and integration tests

### Quick Links

 **Start Here**: Read [SETUP_INSTRUCTIONS.md](../SETUP_INSTRUCTIONS.md) for installation and running instructions

 **Documentation**:
- [README.md](../README.md) - Project overview and features
- [COMPONENT_DOCUMENTATION.md](../COMPONENT_DOCUMENTATION.md) - Detailed component architecture
- [SETUP_INSTRUCTIONS.md](../SETUP_INSTRUCTIONS.md) - Installation and usage guide

### Prerequisites

- Node.js v16+
- npm v7+
- Git

### 5-Minute Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd portfolio-showcase

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

### Key Features

1. **Add Projects** - Dynamic form to add new projects
2. **Search Projects** - Real-time filtering by title or description
3. **Delete Projects** - Remove projects with a single click
4. **Responsive Design** - Works on desktop, tablet, and mobile
5. **Fully Tested** - Comprehensive test coverage with Vitest

### Available Commands

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm test              # Run tests
npm run test:ui       # Run tests with UI
```

### Project Structure

```
src/
 App.jsx                 # Main app component (state management)
 components/             # Reusable React components
    ProjectForm.jsx     # Add project form
    ProjectList.jsx     # Display projects list
    ProjectCard.jsx     # Individual project card
    SearchBar.jsx       # Search input
 __tests__/              # Test files
 [CSS files for each component]
```

### Component Hierarchy

```
App
 ProjectForm (add projects)
 SearchBar (filter projects)
 ProjectList
     ProjectCard[] (display projects)
```

### What to Explore

1. **src/App.jsx** - See how state is managed at the top level
2. **src/components/** - Study reusable components and props
3. **src/__tests__/** - Review comprehensive test examples
4. **CSS files** - See responsive design implementation

### Next Steps

1. Run `npm install` and `npm run dev`
2. Explore the code in VS Code
3. Read the documentation files
4. Run tests with `npm test`
5. Try modifying components to learn React

### Common Tasks

**Add a feature?**
- Create a new component in `src/components/`
- Add tests in `src/__tests__/`
- Style with corresponding CSS file

**Run tests?**
```bash
npm test              # Run once
npm test -- --watch   # Watch mode
npm run test:ui       # Visual UI
```

**Deploy?**
```bash
npm run build         # Create production build
# Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages
```

### Troubleshooting

- **Port 5173 in use?** Run: `npm run dev -- --port 3000`
- **Tests failing?** Run: `npm install && npm test -- --clearCache`
- **Module not found?** Run: `rm -r node_modules && npm install`

### Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Testing Library](https://testing-library.com)
- [MDN Web Docs](https://developer.mozilla.org)

### Key Concepts in This Project

| Concept | Location | Description |
|---------|----------|-------------|
| State Management | `src/App.jsx` | Using useState for projects and search |
| Props Passing | All components | Data flows down, events flow up |
| Component Hierarchy | `src/` | Parent-child relationships |
| Event Handling | All components | Form submit, click, input change |
| Controlled Components | ProjectForm, SearchBar | Input controlled by state |
| Conditional Rendering | ProjectList | Shows empty state or project grid |
| Array Methods | App.jsx | filter(), map() for data manipulation |
| Responsive Design | CSS files | Media queries for all screen sizes |
| Testing | `src/__tests__/` | Unit and integration tests |
| Styling | `*.css` files | CSS with responsive design |

---

**Happy coding!** 

Need help? Check the documentation files or look at the test files for usage examples.

