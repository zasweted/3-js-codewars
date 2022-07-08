function oddCount(n){
    function oddCount(n){
        return Math.floor(n/2)
      }
}


//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
  
}

//----------------------------
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
//-------
function oddOrEven(array) {
  if(array.length === 0){
    return 'even';
  }else{
   let sum = array.reduce((a, b)=> a + b);
    if(sum % 2 === 0){
      return 'even';
    }else{
      return 'odd';
    }
  }
}