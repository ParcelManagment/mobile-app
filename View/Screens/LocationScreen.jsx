import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";




const LocationScreen = ({route}) => {
  //const email = "lakdaya@gmail.com";
  const { email } = route.params;
  
  const getUserId = async () => {
    try {
      // Make GET request to the API route with the email parameter
      const response = await fetch(
        `https://railexpress.netlify.app/api/device/user/id/${email}`
      );
      const data = await response.json();

      if (response.ok) {
        // If the response is successful, set the userId state
        console.log(data.userId);
        Alert.alert("User ID fetched!", `User ID: ${data.userId}`);
      } else {
        // If user not found, show an alert
        Alert.alert("Error", data.message || "User not found");
      }
    } catch (error) {
      //console.error("Error fetching user ID:", error);
      //Alert.alert("Error", "Something went wrong.");
    }
  };
getUserId();
  //   devices = [
  //   { id: "1", name: "Parcel 1", location: "6.9025,79.806073" },
  //   { id: "2", name: "Parcel 2", location: "6.9025,79.806073" },
  // ]
  const navigation = useNavigation();
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [devices, setDevices] = useState([
    { id: "1", name: "Parcel 1", location: "6.9025,79.806073" },
    { id: "2", name: "Parcel 2", location: "6.9025,79.806073" },
  ]);
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    Alert.alert("Parcel Selected", `Parcel ID: ${device.id}`);
    navigation.navigate("Device Location", { device });
  };

  const renderDevice = ({ item }) => (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => handleDeviceSelect(item)}
    >
      <Text style={styles.deviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Select a Parcel</Text>

      {devices.length === 0 ? (
        <Text style={styles.noDevicesText}>You have no parcels yet.</Text>
      ) : (
        <FlatList
          data={devices}
          renderItem={renderDevice}
          keyExtractor={(item) => item.id}
        />
      )}

      <Image
        source={require("../Assets/images/chat.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff", 
    padding: 20,
  },
  titleText: {
    fontSize: 28,
    color: "#fbbc41", 
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  deviceItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fbbc41", 
    borderRadius: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  deviceText: {
    fontSize: 18,
    color: "#ffffff", 
    textAlign: "center",
    fontWeight: "bold",
  },
  noDevicesText: {
    fontSize: 16,
    color: "#fbbc41",
  },
  image: {
    marginBottom: 60,
    width: 500, 
    height: 300, 
  },
});

export default LocationScreen;
