
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["Project Power", "Bad Boys for Life", "Tyler Rake", "Kingsman", "Baywatch", "Mad Max", "Jumanji", "John Wick", "Deadpool", "The Equalizer", "Suicide Squad", "American Sniper", "Black Panther", "Fast & Furious", "BloodShot", "Wanted"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
