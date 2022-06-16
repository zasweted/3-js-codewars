// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  
    if (b === true) {
      return 'true'
    } else {
      return 'false'
    }
    
}

function booleanToString(b){
    return b === true ? 'true' : 'false'
}

//-----------------------------------
//Convert boolean values to strings 'Yes' or 'No'.
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    return bool === true ? 'Yes' : 'No'
}

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
}