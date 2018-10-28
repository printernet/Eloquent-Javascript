// http://eloquentjavascript.net/02_program_structure.html#h_5Hz2kiaaXp

var tiles = "";
for (var row = 0; row < 8; row++) {
  for (var col = 0; col < 8; col++)
    (col + row) % 2 == 0 ? (tiles += " ") : (tiles += "#");
  console.log(tiles);
  tiles = "";
}