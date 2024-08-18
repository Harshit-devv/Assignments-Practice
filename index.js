// ASSIGNMENTS



// VARIABLES & DATA TYPES


// var number = 30;
// console.log(number);

// let name = "Harry";
// console.log(name);

// const boolean = true;
// console.log(boolean);


// const x = 30;
// console.log(typeof x);

// const name = "Harry";
// console.log(typeof name);

// const y = true;
// console.log(typeof y);

// const user = {
//     name: "harry",
//     age: 27,
//     profession: "Web developer"
// }
// console.log( typeof user);

// const arr = ["Banana", "Papaya", "Kiwi", "Mango", "Grapes"];
// console.log(typeof arr);

// let x = "Harry";
// x = "Mayank";
// console.log(x);

// const y = 30;
// y = 40;
// console.log(y);




// OPERATORS


// let add = 4+3;
// console.log(add);

// let subtract = 10-5;
// console.log(subtract);

// let multiply = 10*5;
// console.log(multiply);

// let divide = 50/10
// console.log(divide)

// let remainder  = 50%10
// console.log(remainder);


// let number = 10

// const result = number += 1

// console.log(result);


// let number  = 10;
// const result =  number -= 1;

// console.log(result);

// function compareTwoNumbers (num1, num2) {
//     if(num1 > num2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// compareTwoNumbers(10, 15);


// function compareTwoNumbers (num1, num2) {
//     if(num1 < num2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// compareTwoNumbers(10, 9);


// function compareTwoNumbers (num1, num2) {
//     if(num1 <= num2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// compareTwoNumbers(21, 20);



// function compareTwoNumbers (num1, num2) {
//     if(num1 >= num2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// compareTwoNumbers(21, 22);


// function compareTwoNumbers (str, num) {
//     if(str == num) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// compareTwoNumbers("10", 10);


// function compareTwoNumbers (str, num) {
//     if(str === num) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// compareTwoNumbers("10", 10);


// let num1 = 10;
// let num2 = 20;

// console.log(num1 > 9 && num2 < 10);


// let num1= 10;
// let num2= 20;

// console.log(num1 < 11 || num2 > 21);


// let age = 20;
// let allowedToDrink = age >= 20 ? 'You are eligible' : 'You are not eligible';

// console.log(allowedToDrink);


// function checkNumber(num) {
//     // Use ternary operator to check if the number is negative or positive??
//     const result = num > 0 ? 'Positive' : (num < 0 ? 'Negative' : 'Neutral');
//     return result;
// }

// // Example usage:
// const number = -5;
// console.log(`The number ${number} is ${checkNumber(number)}.`); // 

// const anotherNumber = 10;
// console.log(`The number ${anotherNumber} is ${checkNumber(anotherNumber)}.`); // 

// const zero = 0;
// console.log(`The number ${zero} is ${checkNumber(zero)}.`); // 






// CONTROL STRUCTURES



// function checkNumber (number) {
//     if (number == 0) {
//         console.log("number is", number);
//     } else if (number > 0) {
//         console.log(number, "is a positive number");
//     } else if (number < 0) {
//         console.log(number, "is a negative number");
//     }
// }

// checkNumber(-10);


// function votingAge (age) {
//     if (age < 18) {
//         console.log("You are", age, "years old! You are not eligible to vote");
//     } else if (age >= 18) {
//         console.log("You are", age, "years old you can vote");
//     }
// }
// votingAge(19);



// function findLargest(a, b, c) {
//     let largest;

//     if (a >= b) {
//         if (a >= c) {
//             largest = a;
//         } else {
//             largest = c;
//         }
//     } else {
//         if (b >= c) {
//             largest = b;
//         } else {
//             largest = c;
//         }
//     }

//     return largest;
// }

// // Example usage:
// const num1 = 25;
// const num2 = 30;
// const num3 = 25;

// const largest = findLargest(num1, num2, num3);
// console.log(`The largest number among ${num1}, ${num2}, and ${num3} is : ${largest}.`);




// function dayOfTheWeek (number) {
//     switch(number) {
//         case 1 :
//             console.log("Today is Monday");
//             break;
//         case 2 :
//             console.log("Today is Tuesday");
//             break;
//         case 3 :
//             console.log("Today is Wednesday");
//             break;
//         case 4 :
//             console.log("Today is Thrusday");
//             break;
//         case 5 :
//             console.log("Today is Friday");
//             break;
//         case 6 :
//             console.log("Today is Saturday");
//             break;
//         case 7 :
//             console.log("Today is Sunday");
//             break;
//         default :
//             console.log("Today is the new day");
//     }
// }

// dayOfTheWeek(7);



// function gradeOnTheBasisOfScore (score) {
//     score = Number(score);
//     switch (true) {
//         case score > 90 && score <= 100 :
//             console.log("Your grade is = A");
//             break;
//         case score > 80 && score <= 90 :
//             console.log("Your grade is = B");
//             break;
//         case score > 70 && score <= 80 :
//             console.log("Your grade is = C");
//             break;
//         case score > 60 && score <= 70 :
//             console.log("Your grade is = D");
//             break;
//         case score > 50 && score <= 60 :
//             console.log("Your grade is = E");
//             break;
//         case score > 1 && score <= 50 :
//             console.log("Your grade is = F");
//             break;
//         default :
//             console.log("No Grades");

//     }
// }
// gradeOnTheBasisOfScore(90);



// function checkOddEven (num) {
//     const result = num % 2 == 0 ? 'Even' : 'Odd';
//     return result;
// }

// const number = 10;
// console.log(`The number ${number} is ${checkOddEven(number)}`)


// function leapYearOrNot (year) {
//     const result = (year % 4 == 0 || year % 400 == 0) && year % 100 != 0 ? 'Leap Year' : 'Non-leap Year';
//     return result;
// }
// const number = 1800;
// console.log(`The year ${number} is a ${leapYearOrNot(number)} `);




// LOOPS



// function oneToTen (num) {
//     for(let i = 0; i <= num; i++) {
//         console.log(i);
//     }
// }
// oneToTen(10);


// function fiveTable (num) {
//     for(let i = 5; i <= num; i+2) {
//         console.log(i);
//     }
// }
// fiveTable(50);


// function printTableOf5() {
//     const number = 5;
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }
// printTableOf5();



// function printNumbers1To10 (num) {
//     let i = 0;
//     while(i <= num) {
//         console.log(i);
//         i++;
//     }
// }
// printNumbers1To10(10);


// function sumFrom1To10() {
//     let sum = 0;
//     let i = 1;
    
//     while (i <= 10) {
//         sum += i;
//         i++;
//     }
    
//     return sum;
// }

// console.log(`The sum of numbers from 1 to 10 is: ${sumFrom1To10()}`);



// function printNumbers1To5() {
//     let i = 1;
    
//     do {
//         console.log(i);
//         i++;
//     } while (i <= 5);
// }

// printNumbers1To5();



// function printStarPattern(rows) {
//     for (let i = 0; i <= rows; i++) {
//         let stars = '*';
//         for (let j = 1; j <= i; j++) {
//             stars += '*';
//         }
//         console.log(stars);
//     }
// }

// printStarPattern(5);



// Task 1
// Write a function to check if a number is even or odd and log the result to the console.


// function checkOddOrEven (num) {
//     const number  = num % 2 === 0 ? 'Even' : 'Odd';
//     return number;
// }
// const result = 5;
// console.log(`The number ${result} is an ${checkOddOrEven(result)} number`);



// Task 2
// Write a function to calculate the square of a number and return the result.

// function squareOfANumber (num) {
//     return num * num;
// }
// const number = 5;
// console.log(`The square of ${number} is ${squareOfANumber(number)}`);


// Task 3
// Write a function expression to find the maximum of two numbers and log the result to the console.

// function maximumNumber (num1, num2) {
//     if(num1 < num2) {
//         console.log(num2, 'is maximum');
//     } else {
//         console.log(num1, 'is maximum');
//     }
// }
// maximumNumber(10, 20);
// maximumNumber(5, 2);


// Task 4: Write a function expression to concatenate two strings and return the result.
// const concatenateStrings = function (str1, str2) {
//     return str1 + str2;
// };

// console.log(concatenateStrings("Hello, ", "world!"));
// console.log(concatenateStrings("Good ", "morning!"));


// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// const calculateSum = (num1, num2) => {
//     return num1 + num2;
// }
// const result = calculateSum(10, 20);
// console.log(result);


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// const containsCharacter = (str, char) => {
//     const includes = str.includes(char) ? true : false;
//     return includes;
// }
// const result = containsCharacter('Hello World', 'h');
// console.log(result);



// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// function multiply(a, b = 1) {
//     return a * b;
// }

// console.log(multiply(5)); 
// console.log(multiply(7));    



// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// function greet(name, age = 18) {
//     return `Hello, ${name}! You are ${age} years old.`;
// }

// console.log(greet("Harry", 27)); 
// console.log(greet("Palak"));


// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

// function repeatFunction(func, times) {
//     for (let i = 0; i < times; i++) {
//         func();
//     }
// }

// const sayHello = () => console.log("Hello!");

// repeatFunction(sayHello, 3);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// function applyFunctions(func1, func2, value) {
//     return func2(func1(value));
// }

// const addThree = num => num + 3;
// const multiplyByTwo = num => num * 2;

// console.log(applyFunctions(addThree, multiplyByTwo, 5));




// ARRAYS



// Task 1
// Create an array of numbers from 1 to 5 and log the array to the console.

// const arr = [1,2,3,4,5];
// console.log(arr);


// Task 2
// Access the first and last elements of the array and log them to the console.

// const arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);


// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

// arr.push(6);
// console.log(arr);


// Task 4: Use the pop method to remove the last element from the array and log the updated array.

// arr.pop();
// console.log(arr);


// Task 5: Use the shift method to remove the first element from the array and log the updated array.

// arr.shift();
// console.log(arr);


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

// arr.unshift(0);
// console.log(arr);


// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

// const doubledNumbers =  arr.map(yo => yo * 2);
// console.log(doubledNumbers);



// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

// const evenNumbers = arr.filter(yo => yo % 2 ===0);
// console.log(evenNumbers);


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.


// const sum = (accumulator, currentValue) => {
//     return accumulator + currentValue;
// }
// const total = arr.reduce(sum);
// console.log(total);



// Task 10: Use a for loop to iterate over the array and log each element to the console.

// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }



// Task 11: Use the forEach method to iterate over the array and log each element to the console.

// arr.forEach(element => {
//     console.log(element);
// })



// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix);


// Task 13: Access and log a specific element from the two-dimensional array.

// const specificElement = matrix[0][2];
// console.log(specificElement);

