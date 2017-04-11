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
  const lowerCased = str.toLowerCase();

  // eslint-disable-next-line
  return lowerCased.replace(/\s/g, '') === lowerCased.split('').reverse().join('').replace(/\s/g, '');
};

export default isPalindrome;
