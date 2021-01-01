
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["Holidate", "Last Christmas", "After", "Passengers", "Aladdin", "A star is Born", "Focus", "The Kissing Booth", "Her", "Twilight", "Friends with Benefits", "Beauty and The Beast", "Ted"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
