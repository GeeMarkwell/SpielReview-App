import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NavBar from "./components/NavBar";
import UserHeader from "./components/UserHeader";
import CardIMG from "./components/CardIMG";
import Insight from "./components/Insight";
import TabBar from "./components/TabBar";
import Review from "./components/Review";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Nunito-Light": require("./assets/fonts/Nunito-VariableFont_wght.ttf"),
        "Nunito-Regular": require("./assets/fonts/Nunito-Italic-VariableFont_wght.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // can display a loading screen or a spinner while the fonts are being loaded etc..
  }

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView style={styles.scroll}>
        <TouchableOpacity>
          <UserHeader />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardIMG />
          <Review />
        </TouchableOpacity>
        <TouchableOpacity>
          <Insight />
        </TouchableOpacity>
      </ScrollView>
      <TabBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontStyle: "Nunito-Light",
  },

  scroll: {
    flex: 1,
    fontStyle: "Nunito-Light",
    paddingLeft: 40,
    paddingRight: 40,
  },

  nstdContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
