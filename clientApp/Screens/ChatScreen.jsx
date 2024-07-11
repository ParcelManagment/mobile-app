import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppTextInput from "../components/AppTextInput";
import Colors from "../constants/colors";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ChatMessage from "../components/ChatMessage";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([newMessage, ...messages]);
      setInputText("");
    }
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        inverted
        renderItem={({ item }) => (
          <ChatMessage
            text={item.text}
            timestamp={item.timestamp}
            isUser={item.isUser}
          />
        )}
      />
      <View style={styles.inputContainer}>
        <AppTextInput
          width="85%"
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
          line
        />
        <View style={styles.button}>
          <TouchableOpacity onPress={handleSend}>
            <Icon name="send" size={50} backgroundColor={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: Colors.gray,
    padding: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    width: 50,
    height: 50,
  },
});

export default ChatScreen;
