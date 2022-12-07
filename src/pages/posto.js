import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, alert} from 'react-native';

import Checkbox from 'expo-checkbox';
///npx expo install expo-checkbox 

import '../utils/i18n'
import { useTranslation } from 'react-i18next'

export default function Posto({ navigation }){

  const {t, i18n} = useTranslation();


  const salvoon = 'https://raw.githubusercontent.com/JuhhSobrinho/Ecom/main/assets/salvoon.png'
  const salvooff = 'https://raw.githubusercontent.com/JuhhSobrinho/Ecom/main/assets/salvooff.png' 


  const salvar = () => navigation.navigate('Salvo',  { nome: 'pipi',});

  const [isMaiorq, setMenorq] = useState(seSim);
  const seSim = () => {isMaiorq ? navigation.navigate('Salvo',  { nome: 'pipi',}) : (false) }
    return(
        <View style={{    alignItems: 'center', justifyContent: 'center',}}>
            <View style={styles.line} />
        <View style={styles.card}>

          <View style={styles.preco}>
              <Text style={styles.numb}>
              <Text style={styles.rs}>R$</Text>3,80</Text>
              <Text style={styles.dias}>20 {t('dias atrás')}</Text>
                  <Image
                  style={styles.iconAvali}
                  source={require('../../assets/avali.png')}
                 />
          </View>


          <View style={styles.lineDiv}/>


          <View style={styles.descricao}>
              <View style={{ flexDirection: "row",alignItems: 'flex-end',}}>
                <Image
                  style={styles.iconBan}
                  source={require('../../assets/shell.png')}
                  
                 /><Text style={styles.nomePosto}>postos</Text>
              </View>

            <Text style={styles.ruaPosto}>Av. Independencia, 186 pindamonhangaba </Text>
          </View>




          <View style={styles.kmSalvo}>

          <View style={styles.customRatingBarstyle}>
              <TouchableOpacity>
                       
                  <Image style={styles.starImgStyle} source={isMaiorq ? {uri: salvoon} : {uri: salvooff} || setMenorq ? {uri: salvooff} : {uri: salvoon}} />
                   <Checkbox style={{height: 15, width: 19}} 
                   value={isMaiorq} 
                   onValueChange={setMenorq} 
                   color='transparent'
                   />
              </TouchableOpacity>

      </View>
      <Text style={styles.textStyle} onPress={() => setdefaultRating(0)}>
        {isMaiorq}
      </Text>

            <Text style={styles.km}>6,6 km</Text>
          </View>
        </View>
        </View>
    )
};


const styles = StyleSheet.create({
  
  
    card: {
      marginTop: 10,
      height: 120,
      width: 380,
      backgroundColor: '#fff',
      borderRadius: 10,
      flexDirection: "row"
    },
  
    descricao:{
      marginTop: 10,
      marginLeft: 10,
      width: 200,
    },
  
    iconBan:{
      marginTop: 2,
      marginLeft: 0,
      height: 35,
      width: 40,
    },

    nomePosto: {
      fontSize: 16,
      marginLeft: 10,
      color: 'black',
      fontWeight: 'bold',
      alignItems: 'flex-start',
    },
  
    ruaPosto:{
      marginTop: 10,
      fontSize: 13,
      color: '#BFBFBF',
    },
  
  preco:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    numb:{
      fontSize:16,
      color: 'black',
      fontWeight: 'bold',
    },
  
    rs:{
      fontSize: 16,
    },
  
    dias:{
      fontSize: 10,
      color: '#BFBFBF',
    },

    iconAvali:{
      height: 15,
      width: 75,
      marginLeft: 5,
    },

    line:{ 
    height: 1,
    backgroundColor: '#ededf2',
    marginTop: 10,
    width: 300,
},

  kmSalvo:{
    marginTop: 15,
    alignItems: 'flex-end',
    width: 70,
  },

  iconSalvo:{
    height: 20,
    width: 20,
  },



  km:{
    marginTop: 40,
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',

  },

  lineDiv:{
    flexDirection: "row",
    height: '85%',
    width: 2,
    backgroundColor: '#BFBFBF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '2%',
  },

  save: {
    opacity: 10,
  },
  customRatingBarstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImgStyle:{
    width: 20,
    height: 25,
    resizeMode: 'cover',
    position: 'absolute',
    
  },
  sliderStyle:{
    justifyContent: 'center',
    alignItems: 'center'
  }

  });
  