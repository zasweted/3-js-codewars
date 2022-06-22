const min = function(list){
    let minValue = list[0];

    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (item < minValue) {
        minValue = item;
      }
    }
    return minValue;
}

const max = function(list){
    let maxValue = list[0];

    for (let i=1; i<list.length; i++) {
      const item = list[i];
      if (item > maxValue) {
        maxValue = item;
      }
    }
    return maxValue;
}
//-----------------------------------------
const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

var min1 = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}

var max1 = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}

var min3 = function(list){
  return Math.min(...list)
}

var max3 = function(list){
  
  return Math.max(...list)
}
//-------------------------------------
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]

function minMax(arr){
  let low = [...arr].sort((a, b) => a - b);
  let high = [...arr].sort((a, b) => b - a);
  
  return [low[0], high[0]]; // fix me!
}

//--------------
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}