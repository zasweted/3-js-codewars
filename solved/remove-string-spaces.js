// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.
// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).

function noSpace(x){
    return x.replace( /\s/g, '')
  
}

//-------------------------------------
function noSpace(x){
    return x.split(' ').join('')
}
//-------------------------------------
function noSpace(x){
    return x.replace(/ /g,'')
}