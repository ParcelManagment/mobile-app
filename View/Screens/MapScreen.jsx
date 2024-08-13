import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen = ({ route }) => {
  const { device } = route.params; // Get the device from the route parameters

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Map Screen</Text>
      <Text style={styles.deviceInfoText}>Selected Device: {device.name}</Text>
      <Text style={styles.deviceInfoText}>Device ID: {device.id}</Text>
      {/* Add your map component or other UI elements here */}
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titleText: { fontSize: 24, marginBottom: 20 },
  deviceInfoText: { fontSize: 18 },
});

export default MapScreen;
