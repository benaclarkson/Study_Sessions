/**
 * PROBLEM:
 * A palindrome is a word, phrase, number, or other sequence of characters which
 * reads the same backward as forward. Examples of numerical palindromes are:
 *
 * 2332
 * 110011
 * 54322345
 *
 * You'll be given 2 numbers as arguments: (num, s). Write a function which
 * returns an array of s number of numerical palindromes that come after num.
 * If num is a palindrome itself, it should be included in the count.
 *
 * Return "Not valid" instead if any one of the inputs is not a number or is
 * less than 0.
 *
 * Single digit numbers will NOT be considered numerical palindromes.
 *
 * Input:
 * - Two integers (`num` and `s`)
 * - Non-valid inputs (non-numeric or numbers less than 0, not inclusive of 0)
 *
 * Output:
 * - Array of numerical palindromes starting from `num`
 * - Number of elements in array is `s`
 * - String "Not valid" if inputs are non-numeric or less than 0
 *
 * Rules/Add'l Details:
 * - Single-digit numbers are not palindromes
 *   - < 10 not palindromes
 * - Palindrome -> Sequence of chars that reads the same backwards and forwards
 * - 0 is a valid input
 *
 * Mental Model:
 * - If `num` is not a number, reject input
 * - Starting at `num`, iterate through numbers greater than 9.
 * - If the number is a palindrome, add it to our array.
 * - Stop when array has `s` elements
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 * DATA STRUCTURE:
 * Array
 *
 * ALGORITHM:
 * Main Function
 * x Verify `num` and `s` are positive integers
 *   x If not, return "Not valid"
 * x Declare and initialize new, empty array
 * x Iterate by 1, starting at `num`
 *   x On each iteration, check if current iteration isPalindrome
 *   x If it is, store in empty array
 *   x If not, continue
 *   x If length of array is equal to `s`, return array
 *   x If not, continue to next iteration
 *
 * isPalindrome Function
 *   x If input is less than 0, return false
 *   x Turn num at current iteration to string
 *   x Split string into array of chars and reverse array
 *   x Convert array of reversed chars into string
 *   x If reversed string is equal to the input string, return true
 *   x Otherwise, return false
 */

function palindrome(num, s) {
  if (((num < 0) || !Number.isInteger(num)) ||
      ((s < 0) || !Number.isInteger(s))) {
    return "Not valid";
  }

  let result = [];

  for (let count = num; result.length < s; count += 1) {
    if (isPalindrome(count)) {
      result.push(count);
    } else {
      continue;
    }
  }

  return result;
}

function isPalindrome(number) {
  if (number < 10) return false;

  number = number.toString();
  let reversedNumber = number.toString().split('').reverse().join('');

  return number === reversedNumber;
}

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"