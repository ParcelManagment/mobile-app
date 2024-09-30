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
  const [isSending, setIsSending] = useState(false);
const handleSend = async () => {

if (isSending || !inputText.trim()) return;
setIsSending(true);

  
    const newMessage = {
      id: Math.random().toString(),
      text: inputText,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true,
    };

    // Update local messages
    setMessages((prevMessages) => [userMessage, ...prevMessages]);

    setInputText("");

    //"https://parcelmanagement.netlify.app/model/chat/message/custom",
    try {
      console.log("This is input text : ", inputText);
      const response = await fetch(
        "https://railexpress.netlify.app/model/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputText,
          }),
        }
      );
      //uId: "user-id", // user ID
      //deviceId: "device-id", // device ID
      //dateTime: new Date().toISOString(),
      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", data.Error);
      } else {
        alert("Message sent successfully");
        console.log("Message sent successfully:", data);
        //set to display the message sent
        //response message set to display
        const botMessage = {
          id: Math.random().toString(),
          text: data.response, // Assuming the response is inside the "response" field
          timestamp: new Date().toISOString(),
          isUser: false, // To mark it as a bot message
        };
        setMessages((prevMessages) => [botMessage, ...prevMessages]); // Add bot's message to the state

      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false); // Re-enable button
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
          placeholder="Type message"
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
