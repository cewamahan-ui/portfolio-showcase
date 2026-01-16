import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

describe("ProjectList", () => {
  const mockProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
    },
  ];

  it("renders list of projects", () => {
    const mockDelete = vi.fn();
    render(<ProjectList projects={mockProjects} onDeleteProject={mockDelete} />);

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
  });

  it("shows empty state when no projects", () => {
    const mockDelete = vi.fn();
    render(<ProjectList projects={[]} onDeleteProject={mockDelete} />);

    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });

  it("renders correct number of project cards", () => {
    const mockDelete = vi.fn();
    render(<ProjectList projects={mockProjects} onDeleteProject={mockDelete} />);

    const projectCards = screen.getAllByRole("button", { name: /delete/i });
    expect(projectCards).toHaveLength(2);
  });
});
