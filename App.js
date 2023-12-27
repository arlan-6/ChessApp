import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Board from "./components/board";
import FocusedButtonsContainer from "./components/test";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        <Board />
        <FocusedButtonsContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
