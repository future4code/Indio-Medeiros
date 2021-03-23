export function searchMissingNumber(array: number[]): number {
  const expectedSum = 5050;
  let sum = 0;
  for (let number of array) {
    sum += number;
  }

  return expectedSum - sum;
}

export const createArrayOfNumbersMissingAnumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const maxArraySize = 100;
  let arrayNumbers = [];
  for (let i = 1; i <= maxArraySize; i++) {
    if (i !== randomNumber) {
      arrayNumbers.push(i);
    }
  }
  return {arrayNumbers, randomNumber};
};
const arrayTest = createArrayOfNumbersMissingAnumber();
console.log("result:", searchMissingNumber(arrayTest.arrayNumbers), "expected:", arrayTest.randomNumber);
