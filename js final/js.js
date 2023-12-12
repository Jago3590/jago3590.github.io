var key;
var number;

window.onload = function () {phoneNum()};

window.setInterval(function () {phoneNum()}, 850);

function randomLetter() {
  const characters = "abcde";
  return characters[Math.floor(Math.random() * characters.length)];
}

function phoneNum() {
  var instructions = document.getElementById("press");
  letter = randomLetter();
  number = Math.floor(Math.random() * 9);
  instructions.innerHTML = "Please press " + letter + " to enter " + number;
}

function keyPress(e) {
  var pressedKey;
  if (window.e) {
    pressedKey = e.keyCode;
  } else if (e.which) {
    pressedKey = e.which;
  }
  if (String.fromCharCode(pressedKey) == letter) {
    var current = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = current + number;

  } else {
    alert("Try Again");
  }
}

function submit() {
  alert("Invalid Number");
}