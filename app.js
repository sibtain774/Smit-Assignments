//                   Chapter 20 – for loops nested
// 1.Generate all combinations
const firstNames = ["Lil", "Big"];
const lastNames = ["Zzz", "Boom"];

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        console.log(firstNames[i] + " " + lastNames[j]);
    }
}

// 2.Explain how many times the inner loop runs if the outer loop runs 3 times and the inner loop runs 2 times.
// If the outer loop runs 3 times and the inner loop runs 2 times,
// the inner loop runs a total of 3 * 2 = 6 times.

// 3.Generate names where indexes are not same
for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        if (i !== j) {
            console.log(firstNames[i] + " " + lastNames[j]);
        }
    }
}



//                   Chapter 21 – Changing case
// 1.Write a program to convert a user’s input into lowercase and display it.
let userInput = prompt("Enter your city name:");
let lowerCaseInput = userInput.toLowerCase();
console.log("User input in lower case:", lowerCaseInput);

// 2.Use toUpperCase() to normalize city names before comparison.
let normalized = userInput.toUpperCase();
console.log("Normalized city name for comparison:", normalized);

// 3.Explain the importance of changing case in user input validation.
// Changing the case of user input is crucial for validation because it ensures consistency.
// For example, if a user enters "New York", it should be treated the same as "new york" or "NEW YORK".



//                   Chapter 22 – Strings: measuring length and extracting parts
// 1. Extract the first 5 characters from "JavaScriptRocks"
let str = "JavaScriptRocks";
let firstFive = str.substring(0, 5);
console.log("First 5 characters:", firstFive);

// 2. Get the last character of any user-provided string
let userString = prompt("Enter any string:");
let lastChar = userString.charAt(userString.length - 1);
console.log("Last character of your input:", lastChar);

// 3. Ask user for full name and display its length
let fullName = prompt("Enter your full name:");
console.log("Length of your name:", fullName.length);



//          Chapter 23 – Strings: finding segments
// 1.Use indexOf to find the position of “dog” in "The lazy dog sleeps.".
let sentence = "The lazy dog sleeps.";
let position = sentence.indexOf("dog");
console.log("Position of 'dog':", position);

// 2.Write a script that checks if the word “hello” exists in user input.
let userInput2 = prompt("Enter a sentence:");
if (userInput2.indexOf("hello") !== -1) {
    console.log("The word 'hello' exists in your input.");
}else {
    console.log("The word 'hello' does not exist in your input.");
}

// 3.How does indexOf behave if the string isn’t found?
// If the string isn't found, indexOf returns -1.


//                 Chapter 24 – Strings: finding a character at a location
// 1.Write a script to find the character at position 4 in the word “JavaScript”.
let word = "JavaScript";
let charAtPosition4 = word.charAt(4);
console.log("Character at position 4 in 'JavaScript':", charAtPosition4);

// 2.Ask a user for a string and a position; return the character at that position.
let inputString = prompt("Enter a string:");
let positionInput = parseInt(prompt("Enter a position (0-based index):"));

let character = inputString.charAt(positionInput);
console.log(`Input string: ${inputString}, Position: ${positionInput}, Character: ${character}`);

// 3.What happens when the index is out of bounds? Test it.
console.log("Hello".charAt(100));  // Output: ''
console.log("Test".charAt(-1));    // Output: ''
// If the index is out of bounds, charAt returns an empty string.



//                  Chapter 25 – Strings: replacing characters
// 1.Replace the word “bad” with “good” in the string "This is a bad example.".
let string = "This is a bad example.";
let index = sentence.indexOf("bad");

if (index !== -1) {
  let before = string.slice(0, index);
  let after = string.slice(index + 3);
  let result = before + "good" + after;
  console.log(result);
}

// 2.Replace all instances of "JS" with "JavaScript" in a given sentence.
let string2 = "JS is a great language. JS is also fun.";
let replacedSentence = string2.replace(/JS/g, "JavaScript");
console.log("Replaced sentence:", replacedSentence);

// 3.Use replace() to customize a template message like "Hello, NAME".
let template = "Hello, NAME";
let name = "Naqvi";
let personalizedMessage = template.replace("NAME", name);
console.log("Personalized message:", personalizedMessage);



//                Chapter 26 – Rounding numbers
// 1.Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.
let number = 2.6;
console.log("Math.round(2.6):", Math.round(number));
console.log("Math.floor(2.6):", Math.floor(number));
console.log("Math.ceil(2.6):", Math.ceil(number));

// 2.Ask the user to input a number and round it to the nearest integer.
let userNumber = parseFloat(prompt("Enter a number to round:"));
console.log("Rounded number:", Math.round(userNumber));

// 3.Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.
console.log("Math.floor(-2.9):", Math.floor(-2.9));
console.log("Math.ceil(-2.9):", Math.ceil(-2.9));
// Math.floor rounds down to the nearest integer, while Math.ceil rounds up.



//                   Chapter 27 – Generating random numbers
// 1.Generate a random number between 1 and 6 (like a dice roll).
let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Random dice roll:", randomDiceRoll);

// 2.Write a coin toss simulator using Math.random().
let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin toss result:", coinToss);

// 3.Simulate a random password generator that picks a number between 1000 and 9999.
let randomPassword = Math.floor(Math.random() * 9000) + 1000;
console.log("Random password:", randomPassword);



//                   Chapter 28 – Converting strings to integers and decimals
// 1.Convert the string "45.67" to a float and log it.
let floatString = "45.67";
let floatNumber = parseFloat(floatString);
console.log("Converted float:", floatNumber);

// 2.Parse an integer from the string "123px". What’s the result?
let intString = "123px";
let intNumber = parseInt(intString);
console.log("Parsed integer:", intNumber);

// 3.What happens when you try to parse "abc" to an integer?
let output = parseInt("abc");
console.log("Parsing 'abc' to integer:", output);
// Since "abc" doesn't start with a number, parseInt() can't read anything useful.
// It returns NaN (Not-a-Number).



//                   Chapter 29 – Converting strings to numbers, numbers to strings
// 1.Convert a number to a string and show its type using typeof.
let numberToConvert = 123;
let numberAsString = String(numberToConvert);
console.log("Converted number to string:", numberAsString);
console.log("Type of converted value:", typeof numberAsString);

// 2.Convert the string "2025" to a number and add 10.
let stringToConvert = "2025";
let numberFromString = Number(stringToConvert);
console.log("Converted string to number:", numberFromString);
console.log("Adding 10 to converted number:", numberFromString + 10);

// 3.Explain the difference between parseInt and Number() using examples.
// parseInt() converts a string to an integer, ignoring any non-numeric characters after the number.
// Number() converts a string to a number, but if the string contains non-numeric characters, it returns NaN.
parseInt("123abc")      // 123
Number("123abc")        // NaN

parseInt("45.67")       // 45
Number("45.67")         // 45.67

parseInt("abc123")      // NaN
Number("abc123")        // NaN



//                         Chapter 30 – Controlling the length of decimals
// 1.Use .toFixed(2) to display only 2 decimal places of 123.45678.
let num = 123.45678;
let fixed = num.toFixed(2);
console.log("Number with 2 decimal places:", fixed);

// 2.How would you convert "12.999" to a number and round it to 1 decimal?
let stringNumber = "12.999";
let roundedNumber = number(stringNumber).toFixed(1);
console.log("Rounded number to 1 decimal:", roundedNumber);

// 3.Ask the user to input a decimal and display it rounded to 3 decimal places.
let userDecimal = parseFloat(prompt("Enter a decimal number:"));
let roundedUserDecimal = parseFloat(userDecimal.toFixed(3));
console.log("User input rounded to 3 decimal places:", roundedUserDecimal);



//                          Chapter 31 – Getting the current date and time
// 1.Write a script to display the current date and time using new Date().
let currentDate = new Date();
console.log("Current date and time:", currentDate);

// 2.Extract and display only the year from the current date.
let currentYear = currentDate.getFullYear();
console.log("Current year:", currentYear);

// 3.Display a greeting based on current time (AM/PM).
let hours = currentDate.getHours();
let greeting = hours < 12 ? "Good Morning" : "Good Evening";
console.log(greeting);



//                   Chapter 32 – Extracting parts of the date and time
// 1.Display the current day, month, and year separately.
let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);

// 2.Extract the hours and minutes from the current time.
let hour = now.getHours();
let minutes = now.getMinutes();
console.log("Hours:", hour);
console.log("Minutes:", minutes);

// 3.Create a digital clock format like "13:45" using Date object methods.
let formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
console.log("Digital clock format:", formattedTime);
