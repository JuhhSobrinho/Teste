import React, { useState } from 'react';

import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Posto from './posto';


export default function Salvo({route}) { 
  const piui = 'piui'

  //const [count, setCount] = route.params?.nome;
  const [count, setCount] = useState(route.params?.nome);
  const limpar = () => setCount(prevCount => 'd');


  return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={limpar}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>


      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    flexDirection: 'row',

  },
});