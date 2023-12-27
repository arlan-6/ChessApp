import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Grid = () => {
  const [focusedSquare, setFocusedSquare] = useState({
    colIndex: 10, // Example initial values
    rowIndex: 10,
  });

  const handleSquarePress = (colIndex, rowIndex) => {
    setFocusedSquare({ colIndex, rowIndex });
    // Additional logic for square press
  };

  const renderGrid = () => {
    const grid = [];
    const numRows = 5; // Number of rows in the grid
    const numCols = 5; // Number of columns in the grid

    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        const isFocused =
          focusedSquare.colIndex === j && focusedSquare.rowIndex === i;

        row.push(
          <TouchableOpacity
            key={`${i}-${j}`}
            onPress={() => handleSquarePress(j, i)}
            activeOpacity={0.7}
            style={[styles.square, isFocused && styles.focusedSquare]}
          >
            <Text style={styles.squareText}>{`${i}-${j}`}</Text>
          </TouchableOpacity>
        );
      }
      grid.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }
    return grid;
  };

  return <View style={styles.container}>{renderGrid()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 50,
    height: 50,
    margin: 2,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  focusedSquare: {
    borderColor: "blue",
    borderWidth: 2,
  },
  squareText: {
    fontSize: 12,
    color: "black",
  },
});

export default Grid;
