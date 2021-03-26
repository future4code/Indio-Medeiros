function getMaxValue(arrayHouse: number[]): number {
  let maxValue = 0;
  let aux = 0;
  let count = 0;

  function getMaxValueUsingRecursion(
    arrayHouse: number[],
    count: number
  ): number {
    if (count === arrayHouse.length) {
      return maxValue;
    }

    for (let i = count; i < arrayHouse.length; i++) {
      if (i < arrayHouse.length) {
        aux += arrayHouse[i];
      }
      i++;
    }

    if (aux > maxValue) {
      maxValue = aux;
    }

    aux = 0;
    count++;
    getMaxValueUsingRecursion(arrayHouse, count);
  }
  getMaxValueUsingRecursion(arrayHouse, count);

  return maxValue;
}

const result2: number = getMaxValue([2,3,6,12,3,9,11,4]);

console.log(result2);
