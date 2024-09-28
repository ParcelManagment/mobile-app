import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//below is my device list.edit it after connect to server

//change name to parcel
const devices = [
  { id: "1", name: "Parcel 1 kaluthara to jaffna", },
  { id: "2", name: "Parcel 2 galle to mathara" },
  { id: "3", name: "Parcel 3 maradana to galle" },
  
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    Alert.alert("Device Selected", `Device ID: ${device.id}`);
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
