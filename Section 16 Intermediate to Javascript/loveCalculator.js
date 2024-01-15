function loveCalculator() {
  var myName = prompt('What is your name?');
  var yourName = prompt('What is their name?');
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  return alert(
    myName + ' and ' + yourName + ' have a love score of ' + loveScore + '%'
  );
}
loveCalculator();
