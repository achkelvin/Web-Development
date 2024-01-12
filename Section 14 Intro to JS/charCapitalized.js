// 1. Create var to store string
var char = 'kelvin';
// 2. Capitalize first letter of string
//a. isolate first letter
var firstLetter = char.slice(0, 1);
//b. capitalize first letter
var firstLetterCapitalized = firstLetter.toUpperCase();
//c. isolate rest of string
var restOfName = char.slice(1, char.length);
//d. change rest of string to lowercase
restOfName = restOfName.toLowerCase();
//e. combine capitalized first letter and rest of string
var nameCapitalized = firstLetterCapitalized + restOfName;
// 3. Print result
alert(nameCapitalized);
