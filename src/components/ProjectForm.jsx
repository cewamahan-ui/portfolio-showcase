import { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      onAddProject({
        title: title.trim(),
        description: description.trim(),
      });
      setTitle('');
      setDescription('');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="project-form-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            className={errors.description ? 'input-error' : ''}
            rows="4"
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
