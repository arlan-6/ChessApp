const checkQueenMoves = (correntPosition, board, color) => {
  var available = [];
  console.log(correntPosition);
  console.log("---------------------------------------------------");
  const ways = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  //   console.log(color);
  for (var i in ways) {
    var [x, y] = ways[i];
    while (true) {
      if (
        -1 < correntPosition.rowIndex + x &&
        correntPosition.rowIndex + x < 8 &&
        -1 < correntPosition.colIndex &&
        correntPosition.colIndex + y < 8
      ) {
        // console.log([
        //   correntPosition.rowIndex + x,
        //   correntPosition.colIndex + y,
        // ]);
        // console.log(-1 < correntPosition.rowIndex + x < 8);
        if (
          board[correntPosition.rowIndex + x][correntPosition.colIndex + y] ===
          null
        ) {
          available.push({
            colIndex: correntPosition.colIndex + y,
            rowIndex: correntPosition.rowIndex + x,
          });

          if (x > 0) x++;
          else if (x < 0) x--;

          if (y > 0) y++;
          else if (y < 0) y--;
        } else {
          break;
        }
      } else {
        // console.log(
        //   -1 < correntPosition.rowIndex + x < 8 ||
        //     -1 < correntPosition.colIndex + y < 8
        // );
        // console.log("break", ways[i]);
        break;
      }
    }
  }
  //   console.log(available);
  return available;
};
export default checkQueenMoves;
