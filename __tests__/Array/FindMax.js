/* eslint-env jest */

import findMax from '../../src/Array/FindMax';

test('return 90 for maximum array', () => {
  const arr = [90, 5, 23, 45, 66, 55, 0];

  expect(findMax(arr)).toEqual(90);
});

// ES5 way
test('return 87 for maximum array', () => {
  const arr = [1, -98, 34, 87, -99, 41];

  // eslint-disable-next-line prefer-spread
  expect(Math.max.apply(Math, arr)).toEqual(87);
});
