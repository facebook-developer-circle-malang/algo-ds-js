/* eslint-env jest */

import ReverseString from '../../src/String/ReverseString';

test('Word "Hola" should be reversed to "aloH"', () => {
  const word = 'Hola';
  const reverseString = ReverseString(word);

  expect(reverseString).toEqual('aloH');
});

test('Sentence "Hola aloha" should be reversed to "ahola aloH"', () => {
  const word = 'Hola aloha';
  const reverseString = ReverseString(word);

  expect(reverseString).toEqual('ahola aloH');
});

test('Word "Hola" should not be reversed to "aloh"', () => {
  const word = 'Hola';
  const reverseString = ReverseString(word);

  expect(reverseString).not.toEqual('aloh');
});

test('Sentence "Hola aloha" should not be reversed to "aloH ahola"', () => {
  const word = 'Hola aloha';
  const reverseString = ReverseString(word);

  expect(reverseString).not.toEqual('aloH ahola');
});
