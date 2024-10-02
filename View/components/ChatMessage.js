import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const ChatMessage = ({ text, timestamp, isUser ,isLocation }) => {
if(isLocation){
const navigation = useNavigation();

const handlePress = () => {
    navigation.navigate("MapScreen", {
      id: "1",
      name: "Parcel 1",
      location: text.split(": ")[1],
    });
};

return (
  <TouchableOpacity onPress={handlePress} disabled={!isLocation}>
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{text}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  </TouchableOpacity>
);
//AAAA0087
}
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
