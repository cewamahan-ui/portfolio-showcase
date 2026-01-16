import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  it("renders the app header", () => {
    render(<App />);
    expect(screen.getByText(/personal project showcase app/i)).toBeInTheDocument();
  });

  it("renders the form, search bar, and project list", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/search projects/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  it("displays initial projects", () => {
    render(<App />);
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  it("adds new project when form is submitted", async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await user.type(titleInput, "New Test Project");
    await user.type(descriptionInput, "This is a new test project");
    await user.click(submitButton);

    expect(screen.getByText("New Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a new test project")).toBeInTheDocument();
  });

  it("deletes project when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    await user.click(deleteButtons[0]);

    expect(screen.queryByText("Project 1")).not.toBeInTheDocument();
  });

  it("filters projects by search term", async () => {
    const user = userEvent.setup();
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/search projects/i);
    await user.type(searchInput, "Project 1");

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.queryByText("Project 2")).not.toBeInTheDocument();
  });
});
