function getNumberDifferent(array: number[]) {
  let numberDifferent: number;

  if (array.length === 0) {
    return "array vazio";
  }

  for (let i: number = 0; i < array.length; i++) {
    if (i === 0) {
      array = array.sort();
    }

    if (!numberDifferent && array[i] !== array[i + 1]) {
      numberDifferent = array[i];
    }
    i++;
  }
  return numberDifferent;
}
const arrayTest = [4, 1, 2, 1, 2];
const result = getNumberDifferent(arrayTest);
console.log(result);
