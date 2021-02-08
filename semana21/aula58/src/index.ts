import {  User } from "./entities/user";

//1b.
export const performPurchase = (
  user: User,
  value: number
): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
};

