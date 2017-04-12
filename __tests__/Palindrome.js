/* eslint-env jest */

import isPalindrome from '../src/String/Palindrome';

describe('Palindrome checking', () => {
  it('should return true if it\'s a palindrome', () => {
    const str = 'nutellaalletun';

    expect(isPalindrome(str)).toBeTruthy();
  });

  it('should return true if it\'s a palindrome with space and uppercase string', () => {
    const str = 'A nut for a jar of tuna';

    expect(isPalindrome(str)).toBeTruthy();
  });

  it('should return false if it\'s not a palindrome', () => {
    const str = 'A nut for a jar of whale';

    expect(isPalindrome(str)).toBeFalsy();
  });

  it('should return true if it\'s a palindrome with special symbols', () => {
    const str = '2_A3*3#A2';

    expect(isPalindrome(str)).toBeTruthy();
  });
});
