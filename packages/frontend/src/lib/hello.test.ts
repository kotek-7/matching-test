import { describe, expect, test } from "vitest";
import { hello } from "@/lib/hello";

describe("hello", () => {
  test("should return 'Hello Hono!'", () => {
    expect(hello()).toBe("Hello Hono!");
  });
});
