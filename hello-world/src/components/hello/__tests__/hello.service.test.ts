import { hello } from "../hello.service";

describe("hello", () => {
  it("says `Hello, World` when no value was provided", () => {
    const data = hello();
    expect(data).toBe("Hello, World");
  });

  it("says hello to people when a name was provided.", () => {
    const data = hello("Muco");
    expect(data).toBe("Hello, Muco");
  });

  it("says hello to people in Spanish", () => {
    const data = hello("Muco", "es");
    expect(data).toBe("Hola, Muco");
  });
});
