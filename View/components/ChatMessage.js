import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const ChatMessage = ({ text, timestamp, isUser }) => {
    return (
        <View
            style={[
                styles.messageContainer,
                isUser ? styles.userMessage : styles.botMessage,
            ]}
        >
            <Text style={[styles.messageText, isUser ? styles.userText : styles.botText]}>
                {text}
            </Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: "80%",
    },
    userMessage: {
        backgroundColor: Colors.primary,
        alignSelf: "flex-end",
    },
    botMessage: {
        backgroundColor: Colors.gray,
        alignSelf: "flex-start",
    },
    userText: {
        color: Colors.white,
    },
    botText: {
        color: Colors.black,
    },
    messageText: {
        fontSize: 16,
    },
    timestamp: {
        fontSize: 12,
        color: Colors.medium,
        textAlign: "right",
        marginTop: 5,
    },
});

export default ChatMessage;
