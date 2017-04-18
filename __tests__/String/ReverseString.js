/* eslint-env jest */

import ReverseString from '../../src/String/ReverseString';

test('Word "Hola" should be reversed to "aloH"', () => {
  const word = 'Hola';
  const reverseString = ReverseString(word);

  expect(reverseString).toEqual('aloH');
});

test('Word "Hola" should not be reversed to "aloh"', () => {
  const word = 'Hola';
  const reverseString = ReverseString(word);

  expect(reverseString).not.toEqual('aloh');
});
