import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    paddingVertical: 10,
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
export default Header;
