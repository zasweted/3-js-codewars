
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let ats = []
    for (let i = a; i <= b; i++){
      ats.push(i)
    }
    return ats
  }
//--------------------------------
function between(a, b) {
  var all = [];
  for(a;a<=b;a++){
    all.push(a);
  }
  return all;
}
//---------------------------------
function between(a, b) {
    let finalArr = [];
  
    for(let i = a; i <= b; i++) {
      finalArr.push(i);
    }
    return finalArr;
  }
//----------------------------------
function between(a, b) {  
    const betweenArray = []
    
    while (a <= b) {
      betweenArray.push(a);
      a++;
    }
    
    return betweenArray;
  }
//--------------------------------
function between(a, b) {
    var arr = [];
    for(var i = a; i <= b; i++)
    arr.push(i);
    return arr;
    }