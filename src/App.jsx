import { useState } from 'react';
import './App.css';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of the project',
      completed: false,
      isPending: false,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of the project',
      completed: false,
      isPending: false,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of the project',
      completed: false,
      isPending: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProject = (newProject) => {
    const project = {
      id: Date.now(),
      ...newProject,
      completed: false,
      isPending: true,
    };
    setProjects([...projects, project]);
    
    setTimeout(() => {
      setProjects((prev) =>
        prev.map((p) => (p.id === project.id ? { ...p, isPending: false } : p))
      );
    }, 2000);
  };

  const handleToggleComplete = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, completed: !project.completed } : project
      )
    );
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Project Showcase App</h1>
      </header>

      <main className="app-main">
        <section className="form-section">
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="search-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </section>

        <section className="projects-section">
          <ProjectList
            projects={filteredProjects}
            onDeleteProject={handleDeleteProject}
            onToggleComplete={handleToggleComplete}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
