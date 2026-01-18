# Personal Project Showcase App

A React app to add, search, mark complete, and delete projects.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:5174/

## Features

- Add projects with title & description
- Search in real-time  
- Mark projects as done/undone
- Delete projects
- Responsive design

## How It Works

**State**: Projects & search term stored in App.jsx  
**Props**: Data flows down, callbacks flow up  
**Rendering**: Components re-render when state changes  
**Styling**: CSS Grid responsive layout  

## Project Structure

```
src/
 App.jsx                 # Main state & logic
 components/
    ProjectForm.jsx     # Add projects
    SearchBar.jsx       # Filter projects
    ProjectList.jsx     # Display list
    ProjectCard.jsx     # Individual card
 __tests__/              # 19 unit tests
```

## Testing

```bash
npm test
```

## Tech Stack

React, Vite, CSS Grid, Vitest

## Repository

https://github.com/cewamahan-ui/portfolio-showcase
