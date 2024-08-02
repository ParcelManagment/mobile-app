import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Colors from "../constants/colors";
import FontSize from "../constants/fontsize";
import Spacing from "../constants/spacing";

const { height } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.titleText}>Home</Text>
      <TouchableOpacity
        style={styles.chatFab}
        onPress={() => navigation.navigate("Chat")}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.locationFab}
        onPress={() => navigation.navigate("Location")}
      >
        <Ionicons name="location-sharp" size={24} color="white" />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    color: "black",
    fontFamily: "Inter-bold",
    textAlign: "center",
    marginBottom: 40,
  },
  chatFab: {
    position: "absolute",
    bottom: 30,
    right: -45,
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationFab: {
    position: "absolute",
    bottom: 30,
    right: 45,
    backgroundColor: Colors.primary, 
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
