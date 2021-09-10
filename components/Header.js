import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign:"center",
  },
});
