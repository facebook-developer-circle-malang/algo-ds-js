// @flow

/**
 * Function that takes a string as input and returns the string reversed.
 * This function cannot reverse a string in a word.
 *
 * @param  {string} string
 * @returns string
 */
const ReverseString = (string: string): string => string.split('').reverse().join('');

export default ReverseString;
