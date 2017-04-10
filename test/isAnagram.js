/* eslint-env mocha */

import {assert} from 'chai'
import isAnagram from '../src/isAnagram'

describe('Anagram Checking', () => {
    it('should return true because \"Radium came\" is an anagram of \"Madam Curie\"', () => {
        const s1 = "Madam Curie"
        const s2 = "Radium came"

        assert.isTrue(isAnagram(s1, s2))
    })

    it('should return false because \"Rich\" is not an anagram of \"Rice\"', () => {
        const s1 = "Rice"
        const s2 = "Rich"

        assert.isFalse(isAnagram(s1, s2))
    })
})