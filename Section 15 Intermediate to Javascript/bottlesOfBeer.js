var output = [];
var count = 99;

function beer() {
  while (count >= 1) {
    if (count === 1) {
      output.push(count + ' bottle of beer on the wall');
      output.push(count + ' bottle of beer');
      output.push('Take one down, pass it around');
      output.push('No more bottles of beer on the wall');
    } else {
      output.push(count + ' bottles of beer on the wall');
      output.push(count + ' bottles of beer');
      output.push('Take one down, pass it around');
      output.push(count - 1 + ' bottles of beer on the wall');
    }

    count--;
  }
  console.log(output);
}
