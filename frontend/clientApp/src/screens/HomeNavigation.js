import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page from './Page';

const HomeNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Page1' screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={Page} />
            <Tab.Screen name='Price Listing' component={Page} />
            <Tab.Screen name='Track Parcel' component={Page} />
            <Tab.Screen name='Chat' component={Page} />
        </Tab.Navigator>
    );
};

export default HomeNavigation;
