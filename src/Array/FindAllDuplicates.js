// @flow

/**
 * Find all duplicate elements from array.
 *
 * @param  {any[]} arr
 * @returns any[]
 */

const FindAllDuplicates = (arr: any[]): any[] =>
  arr.filter((value: any, index: number, self: any): boolean =>
    self.indexOf(value) !== index);


export default FindAllDuplicates;
