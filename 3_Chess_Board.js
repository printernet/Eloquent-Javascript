// http://eloquentjavascript.net/02_program_structure.html#h_5Hz2kiaaXp

var tiles = "";
for (var row = 0; row < 8; row++) {
  for (var col = 0; col < 8; col++) {
    if (row == 8) tiles += "\n";
    row % 2 != 0
      ? col % 2 != 0 ? (tiles += " ") : (tiles += "#")
      : col % 2 != 0 ? (tiles += "#") : (tiles += " ");
  }
  console.log(tiles);
  tiles = "";
}