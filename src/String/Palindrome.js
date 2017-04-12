// @flow

/**
 * Palindrome is a word, phrase, or sequence that reads
 * the same backward as forward, e.g., madam or nurses run.
 *
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param  {string} str
 * @returns boolean
 */
const isPalindrome = (str: string): boolean => {
  const lowerCased = str.replace(/[\W_]/g, '').toLowerCase();

  // eslint-disable-next-line
  return lowerCased === lowerCased.split('').reverse().join('');
};

export default isPalindrome;
