import * as React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapPes from '../../MeuComponente/mapPes';

export default function Local() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#e0e0e0' style="auto" />
      <MapPes />
      <MapView style={styles.map}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: "90%",
  },
});
