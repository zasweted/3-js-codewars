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