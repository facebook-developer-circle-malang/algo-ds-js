// @flow

/**
 * Write the function that checks if second parameter of this function is an anagram
 * of first parameter.
 * 
 * @param {string} firstString 
 * @param {string} secondString
 * @returns boolean
 */
const isAnagram = (firstString : string, secondString : string) : boolean => {
    const firstStringSorted = firstString
        .toLowerCase()
        .split("")
        .filter(c => c != " ")
        .sort()
        .join("")
        
    const secondStringSorted = secondString
        .toLowerCase()
        .split("")
        .filter(c => c != " ")
        .sort()
        .join("")
    
    return firstStringSorted == secondStringSorted
};

export default isAnagram