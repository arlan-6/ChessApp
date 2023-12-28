import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Square from "./square";
import main from "./chessTemplate/template";

const Board = () => {
  const [board, setBoard] = useState(main);
  const [focusedSquare, setFocusedSquare] = useState({
    colIndex: 10,
    rowIndex: 10,
  });
  const [availableMove, setAvailableMove] = useState([]);
  const numRows = 8;
  const numColumns = 8;

  const handleFocusChange = (colIndex, rowIndex) => {
    setFocusedSquare({ colIndex, rowIndex });
    // console.log(colIndex, rowIndex);
  };
  const availableM = (a) => {
    setAvailableMove(a);
    // console.log("available");
  };
  const renderGridItem = (colIndex, rowIndex) => {
    const col = colIndex % 2 !== 0;
    const row = rowIndex % 2 === 0;
    const isWhite = col === row;
    const piece = board[rowIndex][colIndex];
    const hasPiece = piece !== null;

    return (
      <Square
        imagePath={hasPiece ? piece.imagePath : null}
        // imagePath={hasPiece ? require(`../assets/img/white-king.png`) : null}  doesn't work
        piece={piece}
        board={board}
        setBoard={setBoard}
        hasPiece={hasPiece}
        availableMoves={availableMove}
        setAvailableMove={availableM}
        isFocused={
          focusedSquare.colIndex === colIndex &&
          focusedSquare.rowIndex === rowIndex
        }
        fucused={focusedSquare.colIndex}
        onFocusChange={handleFocusChange}
        index={{ colIndex, rowIndex }}
        isWhite={isWhite}
        key={`${colIndex}-${rowIndex}`}
      />
    );
  };

  const renderGridRow = (rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {[...Array(numColumns)].map((_, colIndex) =>
        renderGridItem(colIndex, rowIndex)
      )}
    </View>
  );
  const newBoard = [...Array(numRows)].map((_, rowIndex) =>
    renderGridRow(rowIndex)
  );
  return <View style={styles.container}>{newBoard}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#326b6b",
    height: 500,
  },
  row: {
    flexDirection: "row",
  },
});

export default Board;
