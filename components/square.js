import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import a from "../img/q"
const Square = ({
  // path,
  isWhite,
  hasPiece,
  imagePath,
  index,
  isFocused,
  onFocusChange,
}) => {
  const backColor = isWhite ? "#DEE3C3" : "#484a53";
  const [color, setColor] = useState(backColor);
  const styles = StyleSheet.create({
    square: {
      width: 45,
      height: 45,
      backgroundColor: color,
      margin: 1,
      borderRadius: 5,
    },
    squareFocused: {
      width: 45,
      height: 45,
      backgroundColor: "#cd758c",
      margin: 1,
      borderRadius: 5,
    },
    piece: {
      width: "100%",
      height: "100%",
    },
  });

  const renderImage = hasPiece ? (
    <Image source={imagePath} style={styles.piece} />
  ) : null;

  const handlePress = () => {
    onFocusChange(index.colIndex, index.rowIndex);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.square, isFocused && styles.squareFocused]}
    >
      {renderImage}
    </TouchableOpacity>
  );
};

export default Square;
