const checkKnightMoves = (correntPosition, board, color) => {
  var available = [];

  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
  ];

  moves.map((i) => {
    // console.log(i);
    try {
      if (
        -1 < correntPosition.rowIndex + i[0] < 8 &&
        -1 < correntPosition.colIndex + i[1] < 8
      ) {
        if (
          board[correntPosition.rowIndex + i[0]][
            correntPosition.colIndex + i[1]
          ] === null
        ) {
          available.push({
            colIndex: correntPosition.colIndex + i[1],
            rowIndex: correntPosition.rowIndex + i[0],
          });
        }
      }
    } catch (error) {
      //   console.log(error);
    }
  });

  return available;
};
export default checkKnightMoves;
