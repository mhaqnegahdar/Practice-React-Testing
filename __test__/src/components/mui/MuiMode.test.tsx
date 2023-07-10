import { render, screen, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MuiMode } from "@/components/mui/MuiMode";

describe("MuiMode", () => {
  test("Renders Correctly", () => {
    render(<MuiMode />);
  });
});
