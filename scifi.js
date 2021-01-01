
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["Another Earth", "Source code", "Pacific Rims", "Matrix", "Iron Man", "Sunshine", "Ad Astra", "Code 8", "Gemini Man", "Tenet", "The hitchhiker's guide to the galaxy", "Space Balls", "Maze Runner", "Men in Black", "In Time", "BumbleBee"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
