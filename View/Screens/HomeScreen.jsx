import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Colors from "../constants/colors";
import FontSize from "../constants/fontsize";

const { height, width } = Dimensions.get("window");

function HomeScreen({route, navigation }) {
  const { email } = route.params;
  const newEmail = "lakdaya@gmail.com";
  console.log(
    {
      email:email
    }
  )
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../Assets/images/background.png")} // Replace with your image path
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Welcome Home</Text>
          <Text style={styles.subtitleText}>
            Manage your activities quickly and efficiently
          </Text>
        </View>

        {/* Image above buttons */}
        <Image
          source={require("../Assets/images/home.png")} // Replace with your image path
          style={styles.topImage}
          resizeMode="contain"
        />

        {/* Buttons horizontally aligned */}
        <View style={styles.fabContainer}>
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate("Chat", { email: newEmail })}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={28}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate("Location", { email: newEmail })}
          >
            <Ionicons name="location-sharp" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    height: height,
    marginTop: -50,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: height * 0.1,
  },
  titleText: {
    fontSize: FontSize.large,
    color: "white",
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: FontSize.medium,
    color: "#fff", // Use white or a contrasting color for better readability
    textAlign: "center",
    paddingHorizontal: 30,
  },
  topImage: {
    width: 500, // Adjust width as needed
    height: 500, // Adjust height as needed
  },
  fabContainer: {
    flexDirection: "row", // Align buttons horizontally
    justifyContent: "space-around",
    width: width * 0.8,
    marginBottom: height * 0.05,
  },
  fab: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10,
    marginHorizontal: 10, // Add horizontal space between the buttons
  },
});

export default HomeScreen;
