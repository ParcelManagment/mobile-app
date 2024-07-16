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
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
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
    marginTop: Spacing * 2,
  },
  imageBackground: {
    height: height / 2,
    width: "100%",
    marginBottom: Spacing * 2,
  },
  textContainer: {
    paddingHorizontal: Spacing * 4,
    alignItems: "center",
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
  buttonWrapper: {
    paddingHorizontal: Spacing * 2,
    paddingVertical: Spacing * 4,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    borderRadius: Spacing,
    alignItems: "center",
  },
  buttonText: {
    fontSize: FontSize.medium,
    fontFamily: Font["Inter-bold"],
    color: Colors.black,
    textAlign: "center",
  },
});
