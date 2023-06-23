var meme = document.getElementById("meme");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var intervalId;

function moveMeme() {
  var x = Math.random() * (window.innerWidth - meme.width);
  var y = Math.random() * (window.innerHeight - meme.height);
  meme.style.left = x + "px";
  meme.style.top = y + "px";
}

function startMoving() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(moveMeme, 1000); // Move meme every 1 second
}

function stopMoving() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}
