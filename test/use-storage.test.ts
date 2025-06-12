import { renderHook, act } from "@testing-library/react";
import { useStorage } from "../src/use-storage";

describe("useStorage", () => {
  it("should return the initial value when storage is null", () => {
    const { result } = renderHook(() =>
      useStorage<string>(null, "key", "default")
    );

    expect(result.current[0]).toBe("default");
  });

  it("should update the value", () => {
    const { result } = renderHook(() =>
      useStorage<string>(null, "key", "default")
    );

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
  });

  it("should reset value on removeItem", () => {
    const { result } = renderHook(() =>
      useStorage<string>(null, "key", "default")
    );

    act(() => {
      result.current[1]("temp");
      result.current[2]();
    });

    expect(result.current[0]).toBe("default");
  });
});
