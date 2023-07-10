import { renderHook, act } from "@testing-library/react";
import { useCounter } from "@/hooks/useCounter/useCounter";

// act Utility: wrap actions in act

describe("useCounter", () => {
  test("useCounter Renders Correctly", () => {
    const { result } = renderHook(useCounter);

    const { count } = result.current;

    expect(count).toBe(0);
  });

  test("Shoul except and render the same initialCount", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 12 },
    });

    const { increment } = result.current;

    act(() => increment());

    expect(result.current.count).toBe(13);
  });

  test("Shoul Increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 12 },
    });

    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.count).toBe(11);
  });
});
