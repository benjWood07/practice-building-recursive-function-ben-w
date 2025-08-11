// Function to reverse a string using recursion

/*
1. Write a function named reverseString that takes a string as input.
2. The function should:
○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character
of the string with the result of the recursive call on the remaining part
of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.
*/
function reverseString(str) {
    if (str.length <= 1) {                                                      // Base case: if string has only one character or is empty, return it as is
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));             // Recursive case: take the last character and add it to the reversed version of the remaining string 
}

console.log("Testing reverseString function:");                                   // Test the function with various inputs
console.log('reverseString("a") =', reverseString("a"));                          // Test Single character
console.log('reverseString("my") =', reverseString("my"));                        // Test Two characters
console.log('reverseString("today") =', reverseString("today"));                  // Test Regular word
console.log('reverseString("haberdashe") =', reverseString("haberdasher"));       // Test Longer word
console.log('reverseString("What the word") =', reverseString("What the word"));  // Test Sentence with spaces
console.log('reverseString("12345") =', reverseString("12345"));                  // Test Numbers as string
console.log('reverseString("") =', reverseString(""));                            // Test Empty string
console.log('reverseString("tattarrattat") =', reverseString("tattarrattat"));    // Test Palindrome

