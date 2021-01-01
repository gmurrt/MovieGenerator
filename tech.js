
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["Ex Machina", "Back to The Future", "Minority report", "Matrix", "Iron Man", "I, Robot", "Tron: Legacy", "The Martian", "Pirates of Silicon Valley", "The Social Network", "Steve Jobs", "Enron: The smartest guys in the room", "The Inventor: Out for Blood in Silicon Valley"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
