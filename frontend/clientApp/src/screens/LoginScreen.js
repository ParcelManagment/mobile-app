import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Login</Text>
            <Button
                onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })}
                title='Sign In'
            />
        </View>
    );
};

export default LoginScreen;
