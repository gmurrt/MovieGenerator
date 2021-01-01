
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["Spiderman into the Spiderverse", "Over the moon", "The Grinch", "Sausage Party (kinda vulgar)", "Baby Boss", "Aladdin", "Rebel", "Trolls", "Kung Fu Panda", "Megamind", "Up", "Minions", "Toy Story", "The Lion King", "Inside Out", "Cars"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
