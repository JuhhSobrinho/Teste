import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';

import '../src/utils/i18n'
import { useTranslation } from 'react-i18next'

export default function MapPes(){

  const {t, i18n} = useTranslation();

  return(
    <View style={styles.menu}>
      <TextInput style={styles.algumPosto} placeholder={t('Algum Posto Especifico')} color='white' placeholderTextColor="#fff" >
      </TextInput>

      <TouchableOpacity
        onPress={() => Alert.alert('baguio')}
        activeOpacity={0.5}>
            <Image
              style={styles.iconPes}
              source={require('../assets/lupa.png')}
            />
      </TouchableOpacity>
    </View>

)}

const styles = StyleSheet.create({


    menu: {
      width: 300,
      height: 45,
      marginTop: 10,
      backgroundColor: '#5EBF9B',
      borderRadius: 10,
      flexDirection: "row"

    },
    
    algumPosto:{
      marginLeft: 10,
      justifyContent: 'center',
      marginTop: 10,
      flex: 1,
      color: '#fff',
    },

    iconPes: {
      width: 25,
      height: 25,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      textAlign:'left',
    },

  });
  