# Personal Project Showcase App

A modern, responsive Single Page Application (SPA) built with React for showcasing personal projects and portfolio work. The application allows users to add, search, and delete projects dynamically.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Add Projects**: Dynamic form to add new projects with title and description
- **Search Functionality**: Real-time search to filter projects by title or description
- **Delete Projects**: Remove projects with a single click
- **Form Validation**: Built-in validation for form inputs
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Project Structure

```
portfolio-showcase/
 src/
    components/
       ProjectForm.jsx        # Component for adding new projects
       ProjectForm.css
       ProjectList.jsx        # Component for displaying projects list
       ProjectList.css
       ProjectCard.jsx        # Component for individual project card
       ProjectCard.css
       SearchBar.jsx          # Component for searching projects
       SearchBar.css
    __tests__/
       App.test.jsx           # Integration tests for App
       ProjectForm.test.jsx   # Tests for ProjectForm component
       ProjectList.test.jsx   # Tests for ProjectList component
       ProjectCard.test.jsx   # Tests for ProjectCard component
       SearchBar.test.jsx     # Tests for SearchBar component
    test/
       setup.js               # Test setup configuration
    App.jsx                    # Main App component with state management
    App.css                    # App styles
    main.jsx                   # Application entry point
    index.css                  # Global styles
    ...
 vitest.config.js               # Vitest configuration
 package.json
 vite.config.js
 README.md
```

## Component Hierarchy

```
App (State Management)
 Header
 ProjectForm (Add new projects)
 SearchBar (Filter projects)
 ProjectList
     ProjectCard[] (Individual project cards)
```

## State Management

The application uses React's `useState` hook for state management:

- **projects**: Array of project objects with id, title, and description
- **searchTerm**: String to filter projects by search query

All state is managed in the App component and passed down to child components via props.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-showcase
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173/`

### Running Tests

Run the test suite:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Key Features Explained

### 1. Component Hierarchy
- **App**: Main component managing all state (projects and search term)
- **ProjectForm**: Controlled form component with validation
- **ProjectList**: Displays filtered list of projects
- **ProjectCard**: Reusable card component for each project
- **SearchBar**: Input field for searching projects

### 2. State Management
- Projects are stored in state at the App level
- Search term is also managed at the App level
- Props are passed down to child components as needed
- Callback functions are passed from parent to child for event handling

### 3. Event Handling
- **handleAddProject**: Adds a new project to the list
- **handleDeleteProject**: Removes a project from the list
- **setSearchTerm**: Updates search filter in real-time

### 4. Styling
- CSS Modules approach with component-specific styles
- Responsive design with mobile-first approach
- Gradient background with modern color scheme
- Smooth transitions and hover effects
- Flexbox and CSS Grid for layout

### 5. Testing
- Unit tests for all components using Vitest and React Testing Library
- Tests cover rendering, user interactions, and prop passing
- Integration tests for the main App component

## Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: Full-width layout with multi-column grid
- **Tablet** (768px): Adjusted padding and font sizes
- **Mobile** (480px): Single-column layout with optimized spacing

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and dev server
- **Vitest**: Unit testing framework
- **React Testing Library**: Testing utility for React components
- **CSS**: Modern CSS with Flexbox and Grid

## Key Concepts Demonstrated

1. **Component Hierarchy**: Organized structure with parent-child relationships
2. **State Management**: useState hooks for managing application state
3. **Props Passing**: Data and callbacks passed through component tree
4. **Event Handling**: Form submission, input changes, and button clicks
5. **Conditional Rendering**: Empty state when no projects exist
6. **Array Manipulation**: Adding and filtering projects dynamically
7. **Form Validation**: Input validation with error messages
8. **Responsive Design**: Mobile-first CSS approach
9. **Testing**: Comprehensive unit and integration tests
10. **Code Organization**: Clear file structure and naming conventions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add project editing functionality
- Implement local storage to persist projects
- Add categories or tags for projects
- Add image uploads for projects
- Implement pagination for large project lists
- Add sorting options (by date, alphabetical, etc.)
- Add project detail page/modal

## License

This project is open source and available under the MIT License.

## Author

Created as a summative lab assignment for React development.

