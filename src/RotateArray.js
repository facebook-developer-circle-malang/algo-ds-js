// @flow

/**
 * Write a function that takes an array of integers
 * and returns that array rotated by N positions.
 * For example, if N=2, given the input array [1, 2, 3, 4, 5, 6]
 * the function should return [5, 6, 1, 2, 3, 4]
 *
 * @param  {Array} arr
 * @param  {Number} n
 * @returns Array
 */
const rotateArray = (arr: Array<number | string>, n: number): Array<number | string> => {
  const L = arr.length;
  const kth = Number(n);

  return arr.slice(L - kth).concat(arr.slice(0, L - kth));
};

export default rotateArray;
