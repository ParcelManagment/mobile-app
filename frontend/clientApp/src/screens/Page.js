import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, Button, View } from "react-native";

const Page = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Page</Text>
            <Button
                title="Log out"
                onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
            />
        </View>
    );
};

export default Page;
