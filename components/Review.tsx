import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native-web";

function Review() {
  const window = useWindowDimensions();

  const containerStyles = {
    minHeight: window.height / 2,
    minWidth: window.width / 2,
  };
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <View>
          <Image source={require("../icons/rectangle.png")} />
        </View>
        <View style={styles.miscContainer}>
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontWeight: "600", fontSize: 15 }}>
              Abby's Delicious Begels
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, color: "#717171" }}>
              New York, NY
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../icons/pinpoint.png")} />
            <Text style={{ fontWeight: "600", color: "#2DD4CA", fontSize: 15 }}>
              10/10
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={{}}>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            Best bagel place in the city FOR SURE!
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            I absolutely adore this bagel spot in Midtown. Talk about fresh
            bagels! I literally go here every other day because...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    fontFamily: "Nunito-Light",
    // justifyContent: "center",
    // alignItems: "center",
    top: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9.84,
    elevation: 5,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: "white",
  },

  rectangleImage: {
    width: "100%", // adjust the width to fit the container
  },

  descContainer: {
    flexDirection: "row",
    paddingBottom: 10,
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

export default Review;
