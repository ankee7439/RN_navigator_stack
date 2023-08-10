import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  return (
    <>
      <View>
        <Text style={styles.main}>{count}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={incr}>
          <Text style={styles.textBtn}>Incr.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={decr}>
          <Text style={styles.textBtn}>Decr.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    fontSize: 40,
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
