import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Spacing from "../constants/spacing";
import FontSize from "../constants/fontsize";
import Colors from "../constants/colors";
import Font from "../constants/fonts";

const { height } = Dimensions.get("window");

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/welcome.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Track your parcel from anywhere!</Text>
          <Text style={styles.subtitleText}>
            Check the progress of your deliveries
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing * 2,
  },
  imageBackground: {
    height: height / 2.5,
    width: "100%",
    marginBottom: Spacing * 2,
  },
  textContainer: {
    paddingHorizontal: Spacing * 4,
    alignItems: "center",
  },
  titleText: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["Inter-bold"],
    textAlign: "center",
  },
  subtitleText: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["Inter-regular"],
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 4,
  },
  button: {
    backgroundColor: Colors.buttoncolor,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    borderRadius: Spacing,
  },
  buttonText: {
    fontFamily: Font["Inter-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
  },
});
