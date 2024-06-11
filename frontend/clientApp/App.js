import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const SplashScreen = () => {
    return (
        <View
            style={{ backgroundColor: 'tomato', flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Logo Here</Text>
        </View>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const initialRoute = () => {
        if (isLoggedIn) return 'Home';
        if (isFirstTime) return 'OnBoarding';
        return 'Login';
    };

    if (isLoading) return <SplashScreen />;
    return <AppNavigation initialRoute={initialRoute()} />;
};

export default App;
