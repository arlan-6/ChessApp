import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MyImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={null} // Replace with your image URL
        style={styles.image}
        resizeMode="cover" // You can adjust the resizeMode as needed (contain, cover, stretch, etc.)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10, // Add border radius if needed
  },
});

export default MyImageComponent;
