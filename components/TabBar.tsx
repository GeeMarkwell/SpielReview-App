import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Post from "../SVG/create";
import Friends from "../SVG/friends";
import Home from "../SVG/home";
import Profile from "../SVG/profile";
import Save from "../SVG/save";

const TabBar = ({ navigation, activeRoute }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nstdContainer}>
        <TouchableOpacity style={styles.button}>
          <Home />
          <Text style={{ color: "red", fontSize: "10px" }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Friends />
          <Text style={{ fontSize: "10px" }}>Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Post />
          <Text style={{ fontSize: "10px" }}>Create</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Save />
          <Text style={{ fontSize: "10px" }}>Lists</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Profile />
          <Text style={{ fontSize: "10px" }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "12%",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
  },
  nstdContainer: {
    bottom: 30,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  activeText: {
    color: "blue",
  },
  inactiveText: {
    color: "gray",
  },
});

export default TabBar;
