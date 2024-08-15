import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";


const MapScreen = ({ route }) => {
  const { device } = route.params; // Get the device from the route parameters

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Map Screen</Text>
      <Text style={styles.deviceInfoText}>Selected Device: {device.name}</Text>
      <Text style={styles.deviceInfoText}>Device ID: {device.id}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"My Marker"}
          description={"This is a marker in San Francisco"}
        />
      </MapView>
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  titleText: { fontSize: 24, marginBottom: 20 },
  deviceInfoText: { fontSize: 18 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
