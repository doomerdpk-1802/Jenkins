import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/app/page";

test("renders the app heading", () => {
  render(<Home />);
  expect(screen.getByText("✅ Todo App")).toBeInTheDocument();
});

test("adds a todo", async () => {
  render(<Home />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText(
    "Conquer chaos! one task at a time..."
  );
  const addButton = screen.getByText("Add");

  await user.type(input, "Learn Next.js");
  await user.click(addButton);

  expect(screen.getByText("Learn Next.js")).toBeInTheDocument();
});

test("deletes a todo", async () => {
  render(<Home />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText(
    "Conquer chaos! one task at a time..."
  );
  const addButton = screen.getByText("Add");

  await user.type(input, "Delete me");
  await user.click(addButton);

  const deleteButton = screen.getByText("✕");
  await user.click(deleteButton);

  expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
});
