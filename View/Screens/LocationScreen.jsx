import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const devices = [
  { id: "1", name: "Device 1" },
  { id: "2", name: "Device 2" },
  { id: "3", name: "Device 3" },
  // Add more devices as needed
];

const HomeScreen = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    Alert.alert("Device Selected", `Device ID: ${device.id}`);
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
      <Text style={styles.titleText}>Select a Device</Text>
          {devices.length === 0 ? (
        <Text style={styles.noDevicesText}>You have no devices yet.</Text>
      ) : (
        <FlatList
          data={devices}
          renderItem={renderDevice}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    color: "black",
    fontFamily: "Inter-bold",
    textAlign: "center",
    marginBottom: 20,
  },
  deviceItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  deviceText: {
    fontSize: 18,
  },
});

export default HomeScreen;
