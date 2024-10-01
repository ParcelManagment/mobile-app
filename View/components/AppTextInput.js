import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../constants/colors'
import defaultStyles from '../constants/styles';

function AppTextInput({ icon, rightIcon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.medium}
                style={styles.icon} />}
            <TextInput
                placeholderTextColor={colors.medium}
                style={[defaultStyles.text, styles.textInput]}
                {...otherProps} />
            {rightIcon && (
                <View style={styles.righticon}>
                    {rightIcon}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    rightIcon: {
        position: 'absolute',
        marginLeft: 10,
    },
    textInput: {
        flex: 1,
    },
})

export default AppTextInput;