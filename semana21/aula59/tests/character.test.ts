import { validateCharacter } from "../src/services/checkCharacter";

describe("Testing validate charater propeties", () => {
  //2a.
  test("Should return false for empty name", () => {
      expect.assertions(1)
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });
  //2b.
  test("Should return false for life equal 0", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "Indio",
      life: 0,
      strength: 300,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  //2c.
  test("Should return false for strength 0", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "Indio",
      life: 1500,
      strength: 0,
      defense: 500,
    });
    expect(result).toBe(false);
  });

  //2d.
  test("Should return false for defense 0", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "Indio",
      life: 1500,
      strength: 300,
      defense: 0,
    });
    expect(result).toBe(false);
  });

  //2e.
  test("Should return false for life negative", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "Indio",
      life: 1500,
      strength: 300,
      defense: -10,
    });
    expect(result).toBe(false);
  });

  //2f.
  test("Should return true  for proprities validate", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "Indio",
      life: 1500,
      strength: 300,
      defense: 10,
    });
    expect(result).toBe(true);
  });
});
