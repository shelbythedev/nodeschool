function countWords(inputWords) {
      // SOLUTION GOES HERE
  return inputWords.reduce(function (words, word) {
    if (word in words) {
      words[word]++;
    }
    else {
      words[word] = 1;
    }
    return words;
  }, {});
}

module.exports = countWords
