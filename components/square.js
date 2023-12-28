import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import checkPawnMoves from "./chessTemplate/pawnMove";
import checkKnightMoves from "./chessTemplate/knightMove";
import checkQueenMoves from "./chessTemplate/queenMove";
import checkRookMoves from "./chessTemplate/rookMove";
import checkBishopMoves from "./chessTemplate/bishopMove";
// import a from "../img/q"
const Square = ({
  // path,
  board,
  setBoard,
  piece,
  isWhite,
  hasPiece,
  imagePath,
  index,
  isFocused,
  focused,
  onFocusChange,
  availableMoves,
  setAvailableMove,
}) => {
  const isAvailable = availableMoves.some(
    (move) =>
      index.colIndex === move.colIndex && index.rowIndex === move.rowIndex
  );

  // console.log(isAvailable);
  // console.log(availableMoves);
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
    squareAvailable: {
      width: 45,
      height: 45,
      backgroundColor: "#cdaacc",
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
    if (hasPiece) {
      onFocusChange(index.colIndex, index.rowIndex);
      switch (piece.piece) {
        case "pawn":
          setAvailableMove(checkPawnMoves(index, board, piece.color));
          break;
        case "knight":
          setAvailableMove(checkKnightMoves(index, board, piece.color));
          break;
        case "queen":
          setAvailableMove(checkQueenMoves(index, board, piece.color));
          break;
        case "rook":
          setAvailableMove(checkRookMoves(index, board, piece.color));
          break;
        case "bishop":
          setAvailableMove(checkBishopMoves(index, board, piece.color));
        default:
          break;
      }
    } else if (isAvailable) {
      console.log(focused);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[
        styles.square,
        isFocused && styles.squareFocused,
        // styles.square,
        isAvailable && styles.squareAvailable,
      ]}
    >
      {renderImage}
    </TouchableOpacity>
  );
};

export default Square;
