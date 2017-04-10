/* eslint-env jest */

import isAnagram from '../src/isAnagram';

describe('Anagram Checking', () => {
  it('should return true because "Radium came" is an anagram of "Madam Curie"', () => {
    const s1 = 'Madam Curie';
    const s2 = 'Radium came';

    expect(isAnagram(s1, s2)).toBe(true);
  });

  it('should return false because "Rich" is not an anagram of "Rice"', () => {
    const s1 = 'Rice';
    const s2 = 'Rich';

    expect(isAnagram(s1, s2)).toBe(false);
  });
});
