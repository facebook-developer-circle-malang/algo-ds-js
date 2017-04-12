// @flow

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 *
 * Code reference: http://stackoverflow.com/a/12646864/2763662
 *
 * @param  {any[]} collection
 * @returns any
 */
const shuffleArray = (collection: any[]): any[] => {
  const arr = collection;

  for (let i = collection.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = collection[i];
    arr[i] = collection[j];
    arr[j] = temp;
  }

  return arr;
};

export default shuffleArray;
