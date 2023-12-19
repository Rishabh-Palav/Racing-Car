//catching element in DOM by there respective id's 

var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var resut = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");

//Random lane change of blue car

bluecar.addEventListener("animationiteration", function () {
  var random = Math.floor(Math.random() * 3) * 130; //  random decimal number into 0 1 2 multiply by 130 which is width of lane
  bluecar.style.left = random + "px"; //changing css style left property of bluecar according random
  counter++;
});

// Race car movement

window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    var racecarLeft = parseInt(
      this.window.getComputedStyle(racecar).getPropertyValue("left")
    );
    if (racecarLeft < 260) {
      racecar.style.left = racecarLeft + 130 + "px";
    }
    jumpsound.play();
  }
  if (e.key == "ArrowLeft") {
    //keycode method is depreseated using key
    var racecarLeft = parseInt(
      this.window.getComputedStyle(racecar).getPropertyValue("left")
    );
    if (racecarLeft > 0) {
      racecar.style.left = racecarLeft - 130 + "px";
    }
    jumpsound.play();
  }
});

//Game over

setInterval(function Gameover() {
  var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue(
    "top"
  ));
  var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue(
    "left"
  ));
  var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue(
    "left"
  ));
  if (bluecarLeft === racecarLeft && bluecarTop > 250 && bluecarLeft < 450) {
    resut.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `score : ${counter}`;
    counter = 0;
  }
}, 10);
