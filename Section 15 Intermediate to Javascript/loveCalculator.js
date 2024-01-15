function loveCalculator() {
  var myName = prompt('What is your name?');
  var yourName = prompt('What is their name?');
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  if (loveScore > 70) {
    alert(
      myName +
        ' and ' +
        yourName +
        ' have a love score of ' +
        loveScore +
        '%. You love each other like Kanye loves Kanye.'
    );
  }
  if (loveScore > 30 && loveScore <= 70) {
    alert(
      myName + ' and ' + yourName + ' have a love score of ' + loveScore + '%'
    );
  }
  if (loveScore <= 30) {
    alert(
      myName +
        ' and ' +
        yourName +
        ' have a love score of ' +
        loveScore +
        '%. You go together like oil and water.'
    );
  }
}
loveCalculator();
