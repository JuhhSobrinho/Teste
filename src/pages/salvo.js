import React from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';

import Posto from './posto';


export default function Salvo() {
  return (
      <View style={styles.container}>

        <Posto/>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});