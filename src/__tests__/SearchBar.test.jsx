import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("renders search input", () => {
    const mockSearchChange = vi.fn();
    render(<SearchBar searchTerm="" onSearchChange={mockSearchChange} />);

    expect(screen.getByPlaceholderText(/search projects/i)).toBeInTheDocument();
  });

  it("calls onSearchChange when input value changes", async () => {
    const mockSearchChange = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar searchTerm="" onSearchChange={mockSearchChange} />);

    const input = screen.getByPlaceholderText(/search projects/i);
    await user.type(input, "test");

    expect(mockSearchChange).toHaveBeenCalledWith("t");
    expect(mockSearchChange).toHaveBeenCalledWith("te");
    expect(mockSearchChange).toHaveBeenCalledWith("tes");
    expect(mockSearchChange).toHaveBeenCalledWith("test");
  });

  it("displays the current search term", () => {
    const mockSearchChange = vi.fn();
    render(<SearchBar searchTerm="React" onSearchChange={mockSearchChange} />);

    const input = screen.getByPlaceholderText(/search projects/i);
    expect(input.value).toBe("React");
  });
});
