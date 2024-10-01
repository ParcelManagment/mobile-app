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


// Updated device list, now called parcels
const devices = [
  { id: "1", name: "Parcel 1 Kaluthara to Jaffna" },
  { id: "2", name: "Parcel 2 Galle to Mathara" },
  { id: "3", name: "Parcel 3 Maradana to Galle" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDevice, setSelectedDevice] = useState(null);

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

export default HomeScreen;
