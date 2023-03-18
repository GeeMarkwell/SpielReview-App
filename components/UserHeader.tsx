import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native-web";
import More from "../SVG/more";

function UserHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={require("../icons/profile.png")} />
        <View style={styles.infoContainer}>
          <Text>
            <Text style={styles.userName}>Zack Fox</Text> reviewed a restuarant
          </Text>
          <View style={styles.miscContainer}>
            <Text style={{ fontWeight: "300", color: "#717171" }}>
              @reichousness
            </Text>
            <Text style={{ fontWeight: "300", color: "#717171" }}>. 4hr</Text>
          </View>
        </View>
      </View>

      <More />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10, // figma uses 107px, but would not  be conventional
    alignItems: "center",
  },

  userContainer: {
    flexDirection: "row",
  },

  infoContainer: {
    marginLeft: 24, //figma
    justifyContent: "center",
  },

  userName: {
    fontWeight: "bold",
  },

  miscContainer: {
    flexDirection: "row",
  },
});

export default UserHeader;
