// Implement a function which multiplies two numbers.

function multiply(a, b) {
    return a * b;
}

//-----------------------------------

let multiply = (a, b) => a * b;

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    }else {
      return number * 9;
    }
}
//-----------------
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}

