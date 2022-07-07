function feast(beast, dish) {
    let a = Array.from(beast);
    let b = Array.from(dish);
    if (a[0] == b[0] && a[a.length -1] == b[b.length -1]){
      return true
    }else{
      return false
    }
  
}

function feast(a, b) {
    if (a[0] == b[0] && a[a.length -1] == b[b.length -1]){
        return true;
    }else{
        return false;
    }
    
  }

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}