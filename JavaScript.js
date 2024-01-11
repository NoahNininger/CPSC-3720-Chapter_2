function calculate()
{
 // variables height in weight (assumed to be in inches and lbs)
   let heightInput = document.getElementById("height");
   let weightInput = document.getElementById("weight");

 // converts values from HTML inputs to numerical values
   let height = parseFloat(heightInput.value);
   let weight = parseFloat(weightInput.value);

 // converts values to meters and kilos
   height = (height * 2.54) / 100;  // in -> cm -> m
   weight /= 2.2046;

 // calculates BMI
   var bmi = weight / (height * height);
 // According to the CDC, BMI should be rounded to the nearest tenth
   bmi = bmi.toPrecision(3);

 // prints BMI to the console
   console.log('BMI: ' + bmi);

   alert("Your BMI is " + bmi + " and has been printed to the console.");
}

print()
    { document.getElementById("bmi").innerHTML = bmi; }