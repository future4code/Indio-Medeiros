function detectPrefixBetweenStrings(arrayString: string[]): string {
  let letter: string = "";
  let prefix: string = "";

  if (arrayString.length === 0) {
    return "";
  }

  for (let i = 0; i < arrayString[0].length; i++) {
    letter = arrayString[0][i];

    for (let j = 1; j < arrayString.length; j++) {
      if (arrayString[j][i] !== letter) {
        return prefix;
      }
    }
    if (letter) {
      prefix += letter;
    }
  }

  return prefix;
}
const arrayTest = ["coracao", "cor", "corona", "coreia"];
const result = detectPrefixBetweenStrings(arrayTest);
console.log(result);
