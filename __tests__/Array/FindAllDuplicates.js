/* eslint-env jest */

import findAllDuplicates from '../../src/Array/FindAllDuplicates';

test('return an array of duplicate values from an array', () => {
  const givenArray = [2, 1, 2, 3, 8, 4, 5, 2, 8];
  const expectedArray = [2, 2, 8];
  const duplicatedValue = findAllDuplicates(givenArray);

  expect(duplicatedValue).toEqual(expectedArray);
});
