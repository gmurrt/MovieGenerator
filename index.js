
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = [];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}

function suggestions() {
  boxvalue = document.getElementById('box').value;
  arr.push(boxvalue);
  added.innerHTML = "Added";
  console.log(arr);
  return false; // stop submission
}
