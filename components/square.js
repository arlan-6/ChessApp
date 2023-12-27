import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import a from "../img/q"
const Square = (props) => {
  const backColor = props.isWhite ? "#DEE3C3" : "#484a53";
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
      height: "70%",
      zIndex: 3,
    },
  });

  const path = props.path;

  const renderImage = props.hasPiece ? (
    <Image source={props.imagePath} style={styles.piece} />
  ) : null;

  const handlePress = () => {
    props.onFocusChange(props.index.colIndex, props.index.rowIndex);
    // console.log(props.index.colIndex, props.index.rowIndex);
  };

  // const piecePath = props.hasPiece
  //   ? require(`../img/${props.piece.color}-${props.piece.piece}.png`)
  //   : null;

  // console.log(`../img/${props.piece.color}-${props.piece.piece}.png`);
  // console.log(
  //   props.piece !== null
  //     ? `../img/${props.piece.color}-${props.piece.piece}.png`
  //     : "-"
  // );
  // console.log(props.piece !== null ? props.piece.piece : "-");
  // console.log(props.hasPiece);
  // "../img/black-pawn.png"
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.square, props.isFocused && styles.squareFocused]}
    >
      {renderImage}
    </TouchableOpacity>
  );
};

export default Square;
