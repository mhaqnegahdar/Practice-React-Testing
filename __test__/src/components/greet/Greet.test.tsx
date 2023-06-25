//https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greet from "@/components/greet/Greet";

test("Greet Component", () => {
  //test method from Jest
  render(<Greet />); //render the component using RTL

  const text = screen.getByText(/Hello/i);

  expect(text).toBeInTheDocument();
});
