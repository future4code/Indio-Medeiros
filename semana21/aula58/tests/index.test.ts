import { performPurchase } from "../src";
import { User } from "../src/entities/user";

//2a.
test("Testing balance greater than value", () => {
  const user: User = {
    name: "Indio Medeiros",
    balance: 100,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 50,
  });
});

//2b.
test("Testing balance greater than value", () => {
  const user: User = {
    name: "Indio Medeiros",
    balance: 50,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual({
    ...user,
    balance: 0,
  });
});

//2c.
test("Testing balance greater than value", () => {
  const user: User = {
    name: "Indio Medeiros",
    balance: 30,
  };

  const result = performPurchase(user, 50);

  expect(result).toEqual(undefined);
});
