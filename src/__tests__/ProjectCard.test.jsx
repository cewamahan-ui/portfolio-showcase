import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  const mockProject = {
    id: 1,
    title: "Test Project",
    description: "Test description",
  };

  it("renders project title and description", () => {
    const mockDelete = vi.fn();
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("calls onDelete with project id when delete button is clicked", async () => {
    const mockDelete = vi.fn();
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await user.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  it("displays delete button", () => {
    const mockDelete = vi.fn();
    render(<ProjectCard project={mockProject} onDelete={mockDelete} />);

    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });
});
