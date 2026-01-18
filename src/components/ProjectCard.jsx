import './ProjectCard.css';

function ProjectCard({ project, onDelete, onToggleComplete }) {
  return (
    <div className={`project-card ${project.completed ? 'completed' : ''} ${project.isPending ? 'pending' : ''}`}>
      {project.isPending && <div className="pending-indicator">Adding...</div>}
      
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-card-actions">
        <button
          className="done-btn"
          onClick={() => onToggleComplete(project.id)}
          title={project.completed ? 'Mark incomplete' : 'Mark complete'}
          aria-label={project.completed ? 'Mark ' + project.title + ' as incomplete' : 'Mark ' + project.title + ' as complete'}
        >
          done
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(project.id)}
          title="Delete project"
          aria-label={'Delete ' + project.title}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
