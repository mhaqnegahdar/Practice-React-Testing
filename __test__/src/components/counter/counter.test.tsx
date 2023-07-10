import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "@/components/counter/counter";

// Install @testing-library/user-event, Info: https://testing-library.com/docs/user-event/intro/
import userEvent from "@testing-library/user-event";

// setup function
function setup(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx),
  };
}

// ---Convinience API---*
// click, dblClick, tripleClick, hover, uhover, tab

// ---Pointer API---
// pointer({keys:'[MouseRight]'})
// pointer({keys:'[MouseLeft>]'}) :without releasing
// pointer({keys:'[/MouseLeft>]'}) :just releasing

// ---Utility API---
// type, clear, selectOptions, deSelectOptions

// ---Clipboard API---
// copy, cut, paste

// ---Keyboard API---
// keyboard('foo) /;translate to f,o,o
//keyboard('{Shift>}A{/Shift}') /;translate to Shift down, A, Shift up

describe("Counter", () => {
  test("Renders Correctly", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Increment" });
    expect(button).toBeInTheDocument();
  });

  test("Initial Value is 0", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("0");
  });

  //   Mouse Events
  test("On Click Returns correct value", async () => {
    const { user } = setup(<Counter />);

    const heading = screen.getByRole("heading");

    const button = screen.getByRole("button", { name: "Increment" });

    // After 5 Button Clicks
    for (let i = 0; i < 5; i++) {
      await user.click(button);
    }
    // expected
    expect(heading).toHaveTextContent("5");
  });

  //   Type
  test("Renderes a count of 10 after clicking the set button", async () => {
    const { user } = setup(<Counter />);

    const setButton = screen.getByRole("button", { name: "Set" });
    const numberInput = screen.getByRole("spinbutton");
    const heading = screen.getByRole("heading");

    //type 10 into number input
    await user.type(numberInput, "10");
    await user.click(setButton);

    expect(heading).toHaveTextContent("10");
  });

  //   Keyboard
  test("Elements are focused in the right order", async () => {
    const { user } = setup(<Counter />);

    const setButton = screen.getByRole("button", { name: "Set" });
    const numberInput = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(numberInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
