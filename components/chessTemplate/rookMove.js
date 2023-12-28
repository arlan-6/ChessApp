const checkRookMoves = (correntPosition, board, color) => {
  var available = [];

  const ways = [
    [0, -1],
    [-1, 0],
    [1, 0],
    [0, 1],
  ];

  for (var i in ways) {
    var [x, y] = ways[i];
    // console.log(x, y);
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
        // console.log([correntPosition.rowIndex, correntPosition.colIndex]);
        // console.log("break", ways[i]);
        break;
      }
    }
  }
  return available;
};
export default checkRookMoves;
