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
        path={
          hasPiece
            ? {
                url: "https://img.freepik.com/free-vector/gradients-weather-icons-for-apps_79603-1767.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=ais",
              }
            : null
        }
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
