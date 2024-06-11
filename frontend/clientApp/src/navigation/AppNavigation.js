import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from '../screens/HomeNavigation'; // Ensure these paths are correct
import LoginScreen from '../screens/LoginScreen';       // Ensure these paths are correct
import OnBoarding from '../screens/OnBoarding';         // Ensure these paths are correct

const AppNavigation = ({ initialRoute }) => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={HomeNavigation} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
