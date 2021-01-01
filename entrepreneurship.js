
var down = document.getElementById('generated');
var added = document.getElementById('added');

var arr = ["The Founder", "MoneyBall", "The Big Short", "The Social Network", "Wall Street: Money never sleeps", "Catch me if you can", "The Aviator", "Startup.com", "Pirates of Silicon Valley", "Wall Street", "Boiler Room", "War Dogs", "Lord of War", "Margin Call", "Fyre: The greatest party that never happened", "Steve Jobs", "Thank you for smoking", "The pursuit of happiness", "Enron: The smartest guys in the room", "The Inventor: Out for Blood in Silicon Valley", "Becoming Warren Buffet"];

function generator() {
  down.innerHTML =
    arr[Math.floor(Math.random() * arr.length)];
}
