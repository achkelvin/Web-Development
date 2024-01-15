// BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

// IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  if (Math.round(bmi) < 18.5) {
    return 'Your BMI is ' + Math.round(bmi) + ', so you are underweight.';
  }
  if (Math.round(bmi) >= 18.5 && Math.round(bmi) <= 24.9) {
    return 'Your BMI is ' + Math.round(bmi) + ', so you have a normal weight.';
  }
  if (Math.round(bmi) > 24.9 && Math.round(bmi) <= 30) {
    return 'Your BMI is ' + Math.round(bmi) + ', so you are overweight.';
  }
  if (Math.round(bmi) > 30 && Math.round(bmi) <= 35) {
    return 'Your BMI is ' + Math.round(bmi) + ', so you are obese.';
  }
  if (Math.round(bmi) > 35) {
    return 'Your BMI is ' + Math.round(bmi) + ', so you are extremely obese.';
  }
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
