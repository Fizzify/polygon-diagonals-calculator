const result = document.querySelector("#result");

function diagonalsPolygon() {
  var input = prompt("How many sides does the polygon have?");
  var diagonals = (input * (input - 3)) / 2;

  if (input <= 3) {
    result.textContent =
    "This polygon has no diagonals. ";
  } else {
    result.textContent =
    "This " + input + "-gon" + " has " + diagonals + " diagonals.";
  }
}

diagonalsPolygon();
