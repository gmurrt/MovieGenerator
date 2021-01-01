
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["The Wizard of Oz", "Home Alone", "The Godfather", "Casablanca", "Lalaland", "Goodfellas", "Casino", "The Taxi Driver", "Schindler List", "Pulp Fiction", "A Clockwork Orange", "Indiana Jones", "Forrest Gump", "Boyz n The Hood", "Rocky", "ShawShank Redemption"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
