// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    const parts = name.split(' ').map(s => s[0]);
    const inicials = parts.join('.');
    const upp = inicials.toUpperCase();
    return upp;
  
      // code away
  
}

//---------------------------------------
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
//----------------------------------------
const abbrevName = name =>
  name
    .split` `
    .map(part => part[0].toUpperCase())
    .join('.')