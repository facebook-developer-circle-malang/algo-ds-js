/* eslint-env mocha */

const { assert } = require('chai');

const rotateArray = require('../src/RotateArray');

describe('Rotate Array', () => {
  const arr = [1, 2, 3, 4, 5, 6];

  it('should not rotate array if there is not N', () => {
    const rotatedArray = rotateArray(arr);

    assert.deepEqual(rotatedArray, arr);
  });

  it('should rotate array with N=2', () => {
    const expectedArray = [5, 6, 1, 2, 3, 4];
    const rotatedArray = rotateArray(arr, 2);

    assert.deepEqual(rotatedArray, expectedArray);
  });
});
