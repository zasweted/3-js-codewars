// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return (-number)
  }
//------------------------------
  function opposite(number) {
    return number * (-1);
}
//-------------------------------
const opposite = n => n * -1

//------------------------------
function opposite(number) {
    return number/-1;
  }
//-------------------------------
let opposite = number => -number;

//----------------------------
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    
  return -Math.abs(num);
  
}