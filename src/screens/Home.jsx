import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Profile", { name: "Ankit" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.textBtn}>Go To Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
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
  mainText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
