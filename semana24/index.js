const checkDifferenLength = (originalWord, resultOriginalWord) => {
  if (
    originalWord.length - resultOriginalWord.length === 1 ||
    originalWord.length - resultOriginalWord.length === -1
  ) {
    return true;
  }
  return false;
}

const countLetters = (originalWord, resultOriginalWord) => {
  let letterDiffCount = 0;
  for (let i = 0; i < originalWord.length; i++) {
    if (originalWord[i] !== resultOriginalWord[i]) charsDiffCount += 1;
  }
  if (letterDiffCount === 1) {
    return true;
  } else {
    return false;
  }
}

function isOneEdit(originalWord, resultOriginalWord) {
  const resultDifferent = checkDifferenLength(originalWord, resultOriginalWord);
  if (!resultDifferent) {
    return false;
  }
  if (originalWord.length > resultOriginalWord.length) {
    return originalWord.includes(resultOriginalWord);
  }
  if (resultOriginalWord.length > originalWord.length) {
    return resultOriginalWord.includes(originalWord);
  }
  const resultCountLetters = countLetters(originalWord, resultOriginalWord);
  return resultCountLetters;
}

isOneEdit("banana", "banan");
