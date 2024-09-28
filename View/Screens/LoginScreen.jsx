import React from "react";
import axios from "axios";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
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

const users = {
  email: "test@example.com",
  password: "password123",
};



function LoginScreen({ navigation }) {

  async function userLogin(values) {
    axios({
      method: "post",
      url: " https://parcelmanagement.netlify.app/api/users/login",
      data: {
        password: values.password,
        email: values.email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        Alert.alert("Login Successful", "Welcome back!", [
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);
        console.log("User Login successfully:", response.data);
      })
      .catch((error) => {
        Alert.alert("Login Failed", "Invalid email or password");
        console.error("There was an error Login the user!", error);
      });
  }

  const handleSubmit =async (values) => {

    await userLogin(values);

    // if (values.email === users.email && values.password === users.password) {

      
    //   Alert.alert("Login Successful", "Welcome back!", [
    //     { text: "OK", onPress: () => navigation.navigate("Home") },
    //   ]);
    // } else {
    //   Alert.alert("Login Failed", "Invalid email or password");
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Screen style={styles.container}>
        <Image
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/login.png")}
        />
        <Text style={styles.titleText}>Welcome Back!</Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
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
          <View style={styles.buttonContainer}>
            <SubmitButton title="Login" />
          </View>
        </AppForm>
        <Text style={styles.subtitleText}>
          Don't have an account?{" "}
          <Text
            style={styles.linkText}
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    padding: 10,
  },
  imageBackground: {
    height: height / 2.5,
    width: "100%",
    marginBottom: Spacing * 2,
  },
  titleText: {
    fontSize: FontSize.xxLarge,
    color: Colors.black,
    fontFamily: Font["Inter-bold"],
    textAlign: "center",
    marginBottom: Spacing * 2,
  },
  subtitleText: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["Inter-regular"],
    textAlign: "center",
    marginTop: Spacing * 2,
  },
  linkText: {
    color: Colors.primary,
    fontWeight: "bold",
    marginBottom: Spacing,
  },
  buttonContainer: {
    marginTop: Spacing * 1,
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: Spacing,
  },
});

export default LoginScreen;
