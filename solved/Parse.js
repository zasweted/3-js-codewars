// Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//------------
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
    a = parseInt(inputString)
      return a
    }

//------------------------
function getAge(inputString){
    return parseInt(inputString);
}

// Convert a String to a Number!
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function(str){
  
    return parseInt(str);
}
//--------------
var stringToNumber = function(str){
    return +str;
}
//---------------------
const stringToNumber = Number