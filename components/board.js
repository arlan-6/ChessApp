import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Square from "./square";
import main from "./chessTemplate/template";

const Board = () => {
  const [focusedSquare, setFocusedSquare] = useState({
    colIndex: 10,
    rowIndex: 10,
  });
  const numRows = 8;
  const numColumns = 8;

  const handleFocusChange = (colIndex, rowIndex) => {
    setFocusedSquare({ colIndex, rowIndex });
    // console.log(colIndex, rowIndex);
  };

  const renderGridItem = (colIndex, rowIndex) => {
    const col = colIndex % 2 !== 0;
    const row = rowIndex % 2 === 0;
    const isWhite = col === row;
    const piece = main[rowIndex][colIndex];
    const hasPiece = piece !== null;
    return (
      <Square
        imagePath={hasPiece ? piece.imagePath : null}
        // imagePath={hasPiece ? require(`../assets/img/white-king.png`) : null}  doesn't work
        piece={piece}
        hasPiece={hasPiece}
        isFocused={
          focusedSquare.colIndex === colIndex &&
          focusedSquare.rowIndex === rowIndex
        }
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

  const board = [...Array(numRows)].map((_, rowIndex) =>
    renderGridRow(rowIndex)
  );

  return <View style={styles.container}>{board}</View>;
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
