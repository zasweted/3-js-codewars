// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {
    mass = weight / height ** 2;
    if (mass <= 18.5) {
      return 'Underweight'
      
    } else {
      if (mass <= 25.0) {
        return 'Normal'
      } else {
        if (mass <= 30.0) {
          return 'Overweight'
        } else {
          if (mass > 30) {
            return 'Obese'
          }
        }
      }
    }
    console.log(mass)
    }
    
//--------------------------------
function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
}

//-------------------------------------
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}
//---------------------------------------
function bmi(weight, height) {
    let b = weight / height**2;
    return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
}

return b === true ? 'true' : 'false'

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount (n) {
    return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}