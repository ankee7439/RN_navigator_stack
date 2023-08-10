import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Main = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Profile</Text>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.textBtn}>Go TO Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  mainText: {
    fontSize: 50,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",

    margin: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
