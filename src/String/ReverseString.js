// @flow

/**
 * Reverse a word.
 *
 * @param  {string} string
 * @returns string
 */
const reverseWord = (string: string): string => string.split('').reverse().join('');

/**
 * Check if the string is a sentence or not.
 *
 * @param  {string} string
 * @returns boolean
 */
const isSentence = (string: string): boolean => /\s/g.test(string);

/**
 * Reverse the word in a sentence, also reverse the order of the words.
 *
 * @param  {string} sentence
 */
const reverseSentence = (sentence: string): string => {
  const splitSentence = sentence.split(' ');

  return splitSentence.map((word: string): string => reverseWord(word)).reverse().join(' ');
};

/**
 * Function that takes a string as input and returns the string / sentence reversed.
 * This function can also reverse a sentence.
 *
 * @param  {string} string
 * @returns string
 */
const ReverseString = (string: string): string => {
  if (isSentence(string)) {
    return reverseSentence(string);
  }

  return reverseWord(string);
};


export default ReverseString;
