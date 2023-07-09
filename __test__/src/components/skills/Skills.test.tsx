import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "@/components/skills/Skills";

// getBy : returns error if not found
// queryBy : returns null if not found
// findBy : for async elements

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("List Renders", () => {
    render(<Skills skills={skills} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });

  test("List Items Render", () => {
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(skills.length);
  });

  test("Login Button Renders", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("Learning Button dosn't render", () => {
    render(<Skills skills={skills} />);

    const learningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(learningButton).not.toBeInTheDocument();
  });

  test("Learning Button renders after 1001ms", async () => {
    render(<Skills skills={skills} />);

    const learningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );

    expect(learningButton).toBeInTheDocument();
  });
});
