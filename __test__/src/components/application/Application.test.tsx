import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Application from "@/components/application/Application";

// getBy, queryBy, findBy  - only one element
// getAllBy, queryAllBy, findAllBy - more than one element

describe("Application", () => {
  test("Renders Correctly", () => {
    //test method from Jest
    render(<Application />); //render the component using RTL

    // Check MainHeading is rendered
    const mainHeading = screen.getByRole("heading", { level: 1 });

    expect(mainHeading).toBeInTheDocument();

    // Check NameTextBox is rendered
    const secondHeading = screen.getByRole("heading", { level: 2 });

    expect(secondHeading).toBeInTheDocument();

    // Check NameTextBox is rendered
    const nameTextBox = screen.getByRole("textbox", { name: "Name" });

    expect(nameTextBox).toBeInTheDocument();

    // Check ComboBox is rendered
    const comboBox = screen.getByRole("combobox");

    expect(comboBox).toBeInTheDocument();

    // Check terms element is rendered
    const termsElement = screen.getByRole("checkbox");

    expect(termsElement).toBeInTheDocument();

    // Check submit button is rendered
    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
  });
});
