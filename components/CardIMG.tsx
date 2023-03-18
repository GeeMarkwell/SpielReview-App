import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native-web";

function Card() {
  const window = useWindowDimensions();

  const containerStyles = {
    minHeight: window.height / 2,
    minWidth: window.width / 2,
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.rectangleImage}
        source={require("../icons/food.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Nunito-Light",
    top: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9.84,
    elevation: 5,
  },

  rectangleImage: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },

  descContainer: {
    flexDirection: "row",
    padding: 15,
  },

  line: {
    paddingBottom: 10,
    borderTopWidth: 0.45,
    borderTopColor: "#DDDDDD",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  miscContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
