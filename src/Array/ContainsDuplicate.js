// @flow

/**
 * Check if an array contains duplicate values.
 *
 * @param  {any[]} arr
 * @returns boolean
 */

const ContainsDuplicate = (arr: any[]): boolean =>
  arr.some((val: any, i: number): boolean =>
    arr.indexOf(val) !== i);


export default ContainsDuplicate;
