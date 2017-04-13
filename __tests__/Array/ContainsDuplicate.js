/* eslint-env jest */

import containsDuplicate from '../../src/Array/ContainsDuplicate';

test('return true if an array contains duplicate values', () => {
  const arr = [22, 10, 5, 22, 90];

  expect(containsDuplicate(arr)).toBe(true);
});

test('return false if an array NOT contains duplicate values', () => {
  const arr = [22, 10, 5, 90];

  expect(containsDuplicate(arr)).toBe(false);
});
