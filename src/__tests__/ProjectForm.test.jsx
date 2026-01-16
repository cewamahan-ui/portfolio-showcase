import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  it("renders form with title and description inputs", () => {
    const mockAddProject = vi.fn();
    render(<ProjectForm onAddProject={mockAddProject} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("displays error messages when submitting empty form", async () => {
    const mockAddProject = vi.fn();
    const user = userEvent.setup();
    render(<ProjectForm onAddProject={mockAddProject} />);

    const submitButton = screen.getByRole("button", { name: /add/i });
    await user.click(submitButton);

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
  });

  it("calls onAddProject with form data when submitted with valid data", async () => {
    const mockAddProject = vi.fn();
    const user = userEvent.setup();
    render(<ProjectForm onAddProject={mockAddProject} />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await user.type(titleInput, "New Project");
    await user.type(descriptionInput, "A great project description");
    await user.click(submitButton);

    expect(mockAddProject).toHaveBeenCalledWith({
      title: "New Project",
      description: "A great project description",
    });
  });

  it("clears form after successful submission", async () => {
    const mockAddProject = vi.fn();
    const user = userEvent.setup();
    render(<ProjectForm onAddProject={mockAddProject} />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await user.type(titleInput, "New Project");
    await user.type(descriptionInput, "A great project description");
    await user.click(submitButton);

    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });
});
