import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import '../../utils/i18n'
import { useTranslation } from 'react-i18next'

export default function Segura({ navigation }) {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.IconSobre}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={require('../../../assets/seta.png')}></Image>
          </TouchableOpacity>
          <Text style={styles.Text}>{t('Segurança')} </Text>
      </View>
      
          <Image style={styles.perfil} source={require('../../../assets/seguranca.png')}></Image>
          <Text style={{fontSize: 22,   fontWeight: 'bold',}}> {t('SEGURANÇA')} </Text>


          <View style={styles.line} />


      <View style={styles.TextSegura}>
          <Text>{t('ECOM Segurança')} </Text>
          <Text>{t('Em caso de perca de senha ou a troca de senha selecione "redefinir senha", Se porventura ouver alguma duvida consulte Ajuda.')} </Text>
            <View style={styles.menu}>


            <View style={styles.line} />


            <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Ajuda')}>
              <Image style={styles.icon} source={{uri:'https://cdn-icons-png.flaticon.com/512/4744/4744225.png',}}></Image>
              <Text style={styles.Text}>{t('Redefinir Senha')} </Text>
              <Image style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
            </TouchableOpacity>


              <View style={styles.lineMenu} />


            <TouchableOpacity style={styles.topico} onPress={() => navigation.navigate('Ajuda')}>
              <Image  style={styles.icon} source={{uri:'https://cdn-icons-png.flaticon.com/512/18/18436.png',}}></Image>
              <Text style={styles.Text}>{t('Ajuda')} </Text>
              <Image  style={styles.seta} source={{uri:'https://s3-alpha-sig.figma.com/img/379e/fc3a/2aae978f787eb25b01f719491a88dfa2?Expires=1666569600&Signature=HjsKHxzC1BxYsacgo-TunvV3de67b7jJpPkFAjs0GQIb5qT7s7cM6y7JAitahEBYn1KYJF2cyqB5k82-1h3nmj~6SI4I6l7ORM1zHdKSEv0jzjaCTG3kJ2OYHJP~GaDlpp0McWHjWzrOJY5trAsDEcBEAdKF323Ua20OZYUqYJMx4oJeHNu4tuG9JMWf~mgifHrqfpoJ4GbN9TliKp1S8xRGpcIkv3DnQMuSizZw3UVFjvfN2ITIaNQLulhKet1xbKS9JsOexvuxFqsHe7TgG5c32Uc5mKGZVP6YEPQ72vT4vWY4V7WNafSJIrnZ0KkCuuYpXD6QWiBH1h5wnDIjfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
            </TouchableOpacity>

 

            </View>
      </View> 
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    height: '100%',
    alignItems: 'center',
  },
  icon:{
    margin: 15,
    width: 35,
    height: 35,
  },
  IconSobre:{
    margin: '8%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text:{
    color: '#BFBFBF',
    border: 20,
    borderColor: '#62D9AD',
    fontSize: 17,
    marginRight: '30%',
    width: '45%',
  },
  TextSegura:{
    width: '87%',
  },
  perfil: {
    borderRadius: 360,
    width: 150,
    height: 150,
    border: 30,
    borderWidth: 2,
    borderColor: '#62D9AD',
  },
  line:{ 
    height: 3,
    margin: 20,
    backgroundColor: '#D9D9D9',
    width: '90%',
},
  lineMenu:{ 
    height: 2,
    backgroundColor: '#D9D9D9',
    width: '88%',
},
  seta:{
    height: 20,
    width: 20,
  },  
  topico:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  menu:{
    alignItems: 'center',
    justifyContent: 'center',
  }

});
