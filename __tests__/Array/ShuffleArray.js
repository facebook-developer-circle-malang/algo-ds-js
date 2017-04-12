/* eslint-env jest */

import shuffleArray from '../../src/Array/ShuffleArray';

const collection = [1, 2, 3, 4, 5];

test('shuffled array should not equal with original array', () => {
  const oldCollection = collection.slice(); // need to copy the array
  const newCollection = shuffleArray(collection);

  expect(newCollection).not.toEqual(oldCollection);
});

test('every shuffled element should not equal with original element', () => {
  const oldCollection = collection.slice();
  const newCollection = shuffleArray(collection);

  for (let i = 0; i < collection.length; i += 1) {
    if (oldCollection[i] !== collection[i]) {
      expect(oldCollection[i]).not.toEqual(newCollection[i]);
    }
  }
});
