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
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  mobile: Yup.string()
    .required()
    .label("Mobile")
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const { height } = Dimensions.get("window");

function RegisterScreen({ navigation }) {
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../Assets/images/register.png")}
        />
        <AppForm
          initialValues={{
            firstname: "",
            lastname: "",
            mobile: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="firstname"
            placeholder="First Name"
          />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="lastname"
            placeholder="Last Name"
          />
          <AppFormField
            autoCorrect={false}
            icon="phone"
            name="mobile"
            placeholder="Mobile Number"
          />
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
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
        <Text style={styles.subtitleText}>
          Already have an account?{" "}
          <Text
            style={styles.linktext}
            onPress={() => navigation.navigate("Login")}
          >
            Log in
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
  linktext: {
    color: Colors.primary,
    fontWeight: "bold",
    marginBottom: Spacing,
  },
  imageBackground: {
    height: height / 4,
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

export default RegisterScreen;
