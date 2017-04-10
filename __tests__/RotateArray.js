/* eslint-env jest */

import rotateArray from '../src/RotateArray';

describe('Rotate Array', () => {
  const arr = [1, 2, 3, 4, 5, 6];

  it('should not rotate array if there is not N', () => {
    const rotatedArray = rotateArray(arr);

    expect(rotatedArray).toEqual(arr);
  });

  it('should rotate array with N=2', () => {
    const expectedArray = [5, 6, 1, 2, 3, 4];
    const rotatedArray = rotateArray(arr, 2);

    expect(rotatedArray).toEqual(expectedArray);
  });
});
