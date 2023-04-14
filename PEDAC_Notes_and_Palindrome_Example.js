/**
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
 *
 * PE -> process the problem
 * DA -> solving the problem
 * C -> translating the solution to code
 *
 * Understanding the [P]roblem
 * ===========================
 *   - Understanding the problem with these 3 categories:
 * Input:
 *   - Two positive integers (`num` and `s`)
 *   - Non-valid inputs (non-numeric or numbers less than 0, not inclusive of 0)
 *
 * Output:
 *   - Array of numerical palindromes starting from `num`
 *   - Number of elements in array is `s`
 *   - String "Not valid" if inputs are non-numeric or less than 0
 *
 * Rules/Additional Details:
 *   - Single-digit numbers are not palindromes
 *   - < 10 not palindrome
 *   - Palindrome -> sequence of characters that reads the same backwards and
 *     forwards
 *   - 0 is a valid input
 *
 * - Ask questions!
 * - If there's something that's not clear to you, then ask
 * - Don't afraid to appear "incompetent"
 * - Don't make assumptions, no matter how obvious it appears
 *
 *
 * [E]xamples/Test Cases
 * =====================
 * Take a look at the examples/test cases provided to do the following:
 * 1. Validate our understanding of the problem (input/output/rules) is correct
 * 2. Derive implicit requirements, **if any**
 *
 *
 * -- Mental Model Intermission --
 * - Do I have a high level *WHAT* I have to do to get from input to output?
 *
 * input: number, output: number
 * (for example:)
 * - Iterate through numbers from 1 to input, and find the sum of all multiples
 *   of 3 and 5
 * 10 -> 33
 * let sum = 0;
 * 1, 2, *3*, 4, *5*, *6*, 7, 8, *9*, *10*
 * 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [3, 5, 6, 9, 10] -> 33
 *
 * num, s
 * (6, 4) -> 7 -> 8 -> 9 -> 10 -> **11** -> [] -> [11] -> [11, 22] ->
 *   [11, 22, 33, 44]
 *
 * - Iterate through numbers from `num`, and if the number is a palindrome, add
 *   it to our array. Stop when array has `s` elements.
 *
 *
 * [D]ata Structure
 * ================
 * - Do I need an array or an object to hold data in my solution?
 *
 * (6, 4) -> 7 -> 8 -> 9 -> 10 -> **11** -> [] -> [11] -> [11, 22] ->
 *   [11, 22, 33, 44]
 *
 * - We need an array to hold our numerical palindromes
 *
 *
 * [A]lgorithm
 * ===========
 * (6, 4) -> 7 -> 8 -> 9 -> 10 -> **11** -> [] -> [11] -> [11, 22] ->
 *   [11, 22, 33, 44]
 *
 * - Series of steps on **HOW** to get from input to output
 * - Hardest thing is getting the right level of detail:
 *   - Has to be specific enough to implement (translate directly into code)
 *   - Has to be general enough to not name specific methods/syntax
 *   - It should be language agnostic
 *     X Use for loop to iterate
 *     X Use for Each method to iterate
 *     O Iterate through the values
 * - Don't get stuck in the finer details of sub-processes.
 * - An artist doesn't draw super detailed eyes, then nose, then lips. They get
 *   a rough structure of the whole drawing down and then add detail on top of
 *   it.
 *
 * Grace's Example:
 * ----------------
 * palindrome
 * - Declare variable `result` and initialize it to []
 * - Iterate through the numbers starting from argument `num` (run iteration
 *   until the `result` has `s` number of elements)
 *   - If the current number **is a palindrome**, then add it to `result`
 *   - Return `result`
 *
 * palindrome: sequence of characters that read the same backwards and forwards
 * input: number
 * output: boolean
 *
 * isPalindrome (input: number)
 * - declare `numberString` and initialize to the the number coerced into a
 *   string
 * - declare `backwards` and initialize to the string into an array
 * - reverse the order of the elements in `backwards`
 * - combine the characters in `backwards` back into a string
 * - return whether or not `numberString` and `backwards` are the same string
 *
 *
 * 1011 -> "1011" -> ["1", "0", "1", "1"] -> ["1", "1", "0", "1"] -> "1101" ->
 *   false
 * 110011 -> 110011 -> true
 * 2332 -> 2332 -> true
 *
 * 1011 -> "1011" -> "" -> "1" -> "11" -> "110" -> "1101"
 *
 * Single digit numbers will NOT be considered numerical palindromes.
 *
 *
 * [C]ode with Intent
 * ==================
 * - Stick as close to your algorithm as possible - don't improvise new things
 * - It's an expensive blueprint. The workers building the house don't deviate
 *   from the blueprint. They just follow directions.
 * - Super important: Test your code frequently
 * - An artist often steps back from their drawing to ensure it's looking
 *   correct
*/

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