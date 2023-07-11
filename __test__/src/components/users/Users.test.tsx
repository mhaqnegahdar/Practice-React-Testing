import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "@/components/users/Users";
import { rest } from "msw";
import { server } from "@/mocks/server";

describe("Users", () => {
  test("Renders Correctly", () => {
    render(<Users />);

    const textElement = screen.getByRole("heading", { name: "Users" });
    expect(textElement).toBeInTheDocument();
  });

  test("Renders list of users Correctly", async () => {
    render(<Users />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("Renders error correctly", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const errorElement = await screen.findByText("Error fetching users");

    expect(errorElement).toBeInTheDocument();
  });
});
