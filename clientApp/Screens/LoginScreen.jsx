import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components";
import Colors from "../constants/colors";
import Font from "../constants/fonts";
import FontSize from "../constants/fontsize";
import Screen from "../components/Screen";
import Spacing from "../constants/spacing";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const { height } = Dimensions.get("window");

function LoginScreen({ navigation }) {
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/login.png")}
        />
        <Text style={styles.titleText}>Welcome Back!</Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
        <Text style={styles.subtitleText}>
          Don't have an account?{" "}
          <Text
            style={styles.linktext}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  linktext: {
    color: Colors.primary,
    fontWeight: "bold",
    marginBottom: Spacing,
  },
  imageBackground: {
    height: height / 2.5,
    width: "100%",
    marginBottom: Spacing * 2, // Adds space below the image
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
});

export default LoginScreen;
