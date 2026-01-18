import ProjectCard from './ProjectCard';
import './ProjectList.css';

function ProjectList({ projects, onDeleteProject, onToggleComplete }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDeleteProject}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default ProjectList;
