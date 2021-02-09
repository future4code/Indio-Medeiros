import { performAttackInvertDependences } from "../src/services/performAttack";

describe("Testing Mocks", () => {
  //4b.
  test("Should return true ", () => {
    expect.assertions(1);
    const validatorMock = jest.fn(() => {
      return true;
    });

    try {
      const input1 = {
        name: "Indio",
        life: 1500,
        strength: 300,
        defense: 10,
      };
      const input2 = {
        name: "Indio2",
        life: 1100,
        strength: 400,
        defense: 50,
      };

      const result = performAttackInvertDependences(
        input1,
        input2,
        validatorMock
      );
      expect(result).toBe(undefined);
    } catch (error) {
      console.log(error.message);
    }
  });

  //4c.
  test("Should return true ", () => {
    expect.assertions(1);
    const validatorMock = jest.fn(() => {
      return false;
    });

    try {
      const input1 = {
        name: "Indio",
        life: 1500,
        strength: 300,
        defense: 10,
      };
      const input2 = {
        name: "Indio2",
        life: 1100,
        strength: 400,
        defense: 50,
      };

      const result = performAttackInvertDependences(
        input1,
        input2,
        validatorMock
      );
    } catch (error) {
      expect(error.message).toEqual("Invalid Character");
    }
  });
});
