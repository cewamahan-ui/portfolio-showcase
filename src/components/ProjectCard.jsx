import './ProjectCard.css';

function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <button
          className="delete-btn"
          onClick={() => onDelete(project.id)}
          title="Delete project"
          aria-label={`Delete ${project.title}`}
        >
          
        </button>
      </div>
      <p className="project-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
