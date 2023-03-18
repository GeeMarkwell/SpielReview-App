import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native-web";
import Comment from "../SVG/comment";
import SaveFilled from "../SVG/saveFilled";

function Insight() {
  return (
    <View style={styles.container}>
      <View style={styles.nstdContainer}>
        <Image style={styles.image1} source={require("../icons/f3.png")} />
        <Image style={styles.image2} source={require("../icons/f1.png")} />
        <Image style={styles.image3} source={require("../icons/f2.png")} />
        <View style={{ alignSelf: "center", right: 20 }}>
          <Text style={{ fontWeight: "300", color: "#717171" }}>
            Friend average: 9.3/10
          </Text>
        </View>
      </View>

      <View style={styles.action}>
        <View style={{ right: 15, alignItems: "center" }}>
          <Comment />
          <Text style={{ top: 10 }}>25</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <SaveFilled />
          <Text style={{ top: 9 }}>25</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    top: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  nstdContainer: {
    flexDirection: "row",
  },
  image: {
    position: "absolute",
    width: 100,
    height: 100,
  },
  image1: {
    top: 0,
    left: 0,
  },
  image2: {
    top: 0,
    left: -15,
  },
  image3: {
    top: 0,
    left: -30,
  },

  action: {
    flexDirection: "row",
  },
});

export default Insight;
