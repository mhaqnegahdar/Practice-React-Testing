import React from "react";
import { render, screen, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import CounterTwo from "@/components/counter-two/CounterTwo";

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

describe("CounterTwo", () => {
  test("Renders Correctly", () => {
    render(<CounterTwo count={0} />);

    const heading = screen.getByText("Counter Two");

    expect(heading).toBeTruthy();
  });

  test("Renders Correctly", async () => {
    // Mock Functions
    const handleIncrement = jest.fn();
    const handledecrement = jest.fn();

    setup(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handledecrement}
      />
    );

    // Get Buttons
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    // Button Click
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handledecrement).toHaveBeenCalledTimes(1);
  });
});
