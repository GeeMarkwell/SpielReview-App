import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import Adjust from "../SVG/adjust";
import Logo from "../SVG/logo";
import Search from "../SVG/search";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <View style={styles.icon}>
          <Logo />
        </View>
      </View>
      <View style={styles.filters}>
        <View style={{ marginRight: 30 }}>
          <Adjust />
        </View>
        <Search />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60, // figma uses 47px, but does not work for all devices
    paddingRight: 40,
  },

  logoWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 60,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    backgroundColor: "#fff",
  },

  filters: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 20,
    marginRight: 0,
  },

  filter: {
    marginRight: 20,
  },
});

export default NavBar;
