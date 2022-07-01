// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


var capitals = function (word) {
	const positions = [];
  for(let i = 0; i < word.length; i++){
    if(word[i].match(/[A-Z]/)){
    positions.push(i)
      
    }
  }
  return positions
};
//----
function areYouPlayingBanjo(name) {
    if(name[0].match(/R/)){
    return name + ' plays banjo';
    }else{
      if(name[0].match(/r/)){
        return name + ' plays banjo'
      }else{
        return name + ' does not play banjo'
        
      }
    }
  }