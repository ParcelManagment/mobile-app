import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../constants/colors'
import defaultStyles from '../constants/styles';

function AppTextInput({ icon, secIcon, width = '100%', ...otherProps }) {
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
            {secIcon && (
                <View style={styles.secIcon}>
                    {secIcon}
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
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
    },
    secIcon: {
        position: 'absolute',
        right: 15,
    },
})

export default AppTextInput;