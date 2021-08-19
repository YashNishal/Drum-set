var query = document.querySelectorAll(".drum");

document.querySelector(".random-beat").addEventListener("click", function () {
  this.classList.add("pressed-beat-generator");
  let numberOfRandomBeat = 30;
  let randomPlayer = setInterval(() => {
    const randomNoteArrayIndex = Math.floor( Math.random() * (query.length + 1));
    const selectedNote = document.querySelectorAll("button")[randomNoteArrayIndex];

    playSound(selectedNote.innerHTML);
    buttonAnimation(selectedNote.innerHTML);

    numberOfRandomBeat--;
    
    if (numberOfRandomBeat === 0) {
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }
  }, 120);
});

for (var i = 0; i < query.length; i++) {
  query[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}


function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}