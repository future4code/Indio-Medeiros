import { Character } from "../src/entities/character";
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
  test("Should return false ", () => {
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

  //5a.
  test("Should perform attack", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "sub-zero",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kong-lao",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttackInvertDependences(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  //5b.
  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn((character) => {
     return character.name !== ""
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttackInvertDependences(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid Character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
