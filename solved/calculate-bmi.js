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