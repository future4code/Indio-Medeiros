const checkDifferenLength = (originalWord, resultOriginalWord) => {
  if (
    originalWord.length - resultOriginalWord.length === 1 ||
    originalWord.length - resultOriginalWord.length === -1
  ) {
    return true;
  }
  return false;
};

const countDifferentLetters = (originalWord, resultOriginalWord) => {
  let letterDiffCount = 0;
  for (let i = 0; i < originalWord.length; i++) {
    if (originalWord[i] !== resultOriginalWord[i]) charsDiffCount += 1;
  }
  if (letterDiffCount === 1) {
    return true;
  } else {
    return false;
  }
};

function CheckIsOneEdit(originalWord, resultOriginalWord) {
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
  const resultCountLetters = countDifferentLetters(
    originalWord,
    resultOriginalWord
  );
  
  return resultCountLetters;
}


// =================================================================

// Exercicio 2

const countLetters = (word) => {
  let totalLetters = [];

  for (let letter of word.toLowerCase()) {
    if (!totalLetters[letter]) {
      totalLetters[letter] = [`${letter}`, 1];
    } else {
      totalLetters[letter][1] += 1;
    }
  }

  return totalLetters;
};

const joinResultOfLetterCount = (word, resultCountLetters) => {
  let newWord;

  for (let letter of word.toLowerCase()) {
    if (!newWord) {
      newWord = resultCountLetters[letter].join("");
    } else if (!newWord.includes(resultCountLetters[letter].join(""))) {
      newWord += resultCountLetters[letter].join("");
    }
  }

  if (newWord.length > word.length) {
    return word;
  } else {
    return newWord;
  }
};

function compressWord(word) {
  const resultCountLetters = countLetters(word);
  const wordCompressed = joinResultOfLetterCount(word, resultCountLetters);
  
  return wordCompressed;
}

compressWord("aabbb");
