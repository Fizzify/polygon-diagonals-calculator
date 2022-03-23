const result = document.querySelector("#result");

function diagonalsPolygon() {
  var input = prompt("How many sides does the polygon have?");
  var diagonals = (input * (input - 3)) / 2;
  result.textContent =
    "This " + input + "-gon" + " has " + diagonals + " diagonals.";
}

diagonalsPolygon();
