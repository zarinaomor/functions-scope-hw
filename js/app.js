// What is the difference between a parameter and an argument?
    // parameters are passed when function is declared
    // arguments are passed when function invokes

// Within a function, what is the difference between return and console.log?
    // return is output that was given to function. It prints the value.
    // console.log just prints the message on console and returns undefined.

// What are the implications of the ability of a function to return a value?
    // to give actual value to the putput of the function

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. 
// The function should return true if the string is a palindrome, false if not. 
// Make sure your function will give the correct answer for words with capital letters.

// GO BACK!!!!!!!!!!!!!!!
 
const checkPalindrome = (str) => {
    if(str.split(' ').reverse().join()) {
        // return true;
    }else {
        // return false;
    }


}
// console.log(checkPalindrome("Zarina"));

// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.

// GO BACK!!!!!!!!!!!!!!!

const sumDigits = (num) => {
    let sum = 0;
    let numToString = num.toString().split(' ');
    for (let i=1; i<numtToString.length; i++) {
        sum += Number(numToString[i]);
    }
    // return sum;    

}
// console.log(sumDigits(42)); //6

// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

const calculateSide = (sideA, sideB) => {
    let sideC = Math.sqrt((sideA * sideA) + (sideB * sideB));
    // return sideC;
}
// console.log(calculateSide(8, 6));

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.

// GO BACK!!!!!!!!!!!!!!!

const sumArray = (array) => {
    let sum = 0;
    let newArray = array.reducer();

}

// console.log(sumArray(1, 2, 3, 4, 5, 6));

