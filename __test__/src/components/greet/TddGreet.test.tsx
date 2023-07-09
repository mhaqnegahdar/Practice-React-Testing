//TDD(Test Driven Development) (red-green): write the test first then write the component
import TddGreet from "@/components/greet/TddGreet";
import { render, screen } from "@testing-library/react";
// Jest-Dom :https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

//Greet should render the thext Hello and if a name is passed it shold render hello followed by the name

// it == test

// fit -- test.only
// xit -- test.skip

describe("TDD Greet", () => {
  it("TddGreet renders successfully", () => {
    render(<TddGreet />);

    const textElement = screen.getByText("Hello");

    expect(textElement).toBeInTheDocument();
  });

  it("TddGreet renders successfully with a name", () => {
    render(<TddGreet name="Mohamad" />);

    const textElement = screen.getByText("Hello Mohamad");

    expect(textElement).toBeInTheDocument();
  });
});
