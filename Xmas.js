//Write a program that calculates the area of a rectangle given length and width.
/*
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50

// 2. Multiply a variable by 5 using *= operator
let num = 4;
num *= 5;
console.log(num); // Output: 20

// 3. Check if two variables have the same value and type
let a = 10, b = '10';
console.log(a === b); // Output: false

// 4. Compare if 10 is greater than or equal to 5
console.log(10 >= 5); // Output: true

// 5. Concatenate strings "Hello" and "World"
let greeting = "Hello" + " " + "World";
console.log(greeting); // Output: "Hello World"

// 6. Extract the word "fun" from the string "Coding is fun"
let string = "Coding is fun";
let funWord = string.slice(11, 14);
console.log(funWord); // Output: "fun"

// 7. Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(-5); // Output: Negative

// 8. Check if a number is odd or even using a ternary operator
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Odd

//Code Challenges (Set 2)
// 1. Function greet
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: "Hello, Alice!"

// 2. Function add
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

// 3. Function isEven
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8)); // Output: true

// 4. Print numbers from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5. Print first 5 multiples of 3 using while loop
let count = 1;
while (count <= 5) {
    console.log(count * 3);
    count++;
}

// 6. Calculate the factorial of a number using for loop
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120

//Code Challenges (Set 3)
// 1. Count occurrences of the letter "a" in the string
let str = "JavaScript is amazing!";
let countA = str.split('a').length - 1;
console.log(countA); // Output: 2

// 2. Function sumArray
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3])); // Output: 6

// 3. Log key-value pairs of an object
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 4. Check if number 5 exists in the array using includes()
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(5)); // Output: true

// 5. Function findMax
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

// 6. Combine two arrays using concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]

// 7. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"

// 8. Function that checks if a number exists in an array
function checkNumberInArray(num, arr) {
    return arr.includes(num) ? "Found" : "Not Found";
}
console.log(checkNumberInArray(3, [1, 2, 3, 4])); // Output: "Found"

// 9. Function to count vowels in a string
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}
console.log(countVowels('hello world')); // Output: 3

// 10. Check if two arrays are equal
function areArraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // Output: true

// 11. Filter out numbers greater than 10
let numbers = [5, 12, 8, 14, 3];
let filteredNumbers = numbers.filter(num => num <= 10);
console.log(filteredNumbers); // Output: [5, 8, 3]

// 12. Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('racecar')); // Output: true

// 13. Swap keys and values of an object
function swapKeysValues(obj) {
    let swappedObj = {};
    for (let key in obj) {
        swappedObj[obj[key]] = key;
    }
    return swappedObj;
}
console.log(swapKeysValues({a: 1, b: 2})); // Output: {1: "a", 2: "b"}

// 14. Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]
*/
// 15. Capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('hello world')); // Output: "Hello World"