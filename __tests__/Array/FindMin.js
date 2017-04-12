/* eslint-env jest */

import findMin from '../../src/Array/FindMin';

test('return 0 for minimum array', () => {
  const arr = [90, 5, 23, 45, 66, 102, 0];

  expect(findMin(arr)).toEqual(0);
});

test('return -99 for minimum array', () => {
  const arr = [-30, 66, 92, 87, -99, 31];

  expect(findMin(arr)).toEqual(-99);
});

// ES5 way
test('return -87 for minimum array', () => {
  const arr = [1, 98, 34, -87, 99, 41];

  // eslint-disable-next-line prefer-spread
  expect(Math.min.apply(Math, arr)).toEqual(-87);
});
