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
import AppButton from "../components/AppButton";

const { height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
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
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
        />
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
    marginTop: Spacing * 2, // Adjust this value to increase/decrease space above the image
  },
  imageBackground: {
    height: height / 2.5,
    width: "100%",
    marginBottom: Spacing * 2, // Adds space below the image
  },
  textContainer: {
    paddingHorizontal: Spacing * 4,
    alignItems: "center", // Center align text content horizontally
  },
  titleText: {
    fontSize: FontSize.xxLarge,
    color: Colors.black,
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
    width: "100%", // Make the button container full width
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 4,
  },
});
