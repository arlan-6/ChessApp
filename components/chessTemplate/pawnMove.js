const checkPawnMoves = (correntPosition, board, color) => {
  const q = color === "white" ? -1 : 1;
  const firstMove =
    (correntPosition.rowIndex === 6 && "white") ||
    (correntPosition.rowIndex === 1 && "black")
      ? true
      : false;
  var available = [];
  //   console.log(
  //     board[correntPosition.rowIndex + q + q][correntPosition.colIndex] === null
  //   );
  //   console.log([correntPosition.colIndex, correntPosition.rowIndex + q]);
  //   console.log(correntPosition);
  try {
    if (
      board[correntPosition.rowIndex + q][correntPosition.colIndex] === null
    ) {
      //   console.log(1);
      available.push({
        colIndex: correntPosition.colIndex,
        rowIndex: correntPosition.rowIndex + q,
      });
      //   console.log({
      //     colIndex: correntPosition.colIndex,
      //     rowIndex: correntPosition.rowIndex + q,
      //   });
      if (
        firstMove &&
        board[correntPosition.rowIndex + q + q][correntPosition.colIndex] ===
          null
      ) {
        available.push({
          colIndex: correntPosition.colIndex,
          rowIndex: correntPosition.rowIndex + q + q,
        });
      }
    }
    // console.log(available);
    return available;
  } catch (error) {
    console.log(error);
  }
};
export default checkPawnMoves;
