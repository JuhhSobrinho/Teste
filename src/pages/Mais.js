import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, alert, TextInput, ScrollView, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';
///npx expo install expo-checkbox 


import '../utils/i18n'
import { useTranslation } from 'react-i18next'

export default function Mais({ navigation }) {
  const {t, i18n} = useTranslation();

  const [isShell, setShell] = useState(false);
  const [isBr, setBr] = useState(false);
  const [isIpiranga, setIpiranga] = useState(false);
  const [isSete, setSete] = useState(false);


  const [postoName, setPostoName] = useState('');
  const [postoEnder, setPostoEnder] = useState('');

  const [precoGaso, setPrecoGaso] = useState('');
  const [precoDiesel, setPrecoDiesel] = useState('');
  const [precoEtanol, setPrecoEtanol] = useState('');





  const [range, setRange] = useState(2)
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])
  const startImgFilled = 'https://s3-alpha-sig.figma.com/img/331c/b863/c33fae4f4153068bd38f5953ea0c1c36?Expires=1665360000&Signature=XxYNHyvFxF7Dr4FpDmjzddgKCum7pElO7hE8wO6SBO7OjzVThH01mKy578tEhUlPPwhVU-PhdjY76WbD30NCT5BbNmi5ntMAGfN3xcBGTo5S6q2gYeu8sK4w9lf0377O1qxnEQDHCZCZuizOFU~~KV8d5I9npoLHOX1WG4wE5xmHuk6jU7apnQr086qHRIXG8mx5M8vvq00-s7S-Whm1784vBXyK5ypJ-hHn6asBYbzPd7u9wS7cX-i4svtgCNT7h58CPBvmkVqFtwVX4Q9blYgtw~hNwyd3ukHXuLvpd9cjSSYYA7MZWHSglTBOLflGg1a0puD09wSc4ppHYNRR5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  const starImgCorner = 'https://s3-alpha-sig.figma.com/img/6d9d/25cb/afdaf9faa1c5b313f2ce55493f107f86?Expires=1665360000&Signature=J0hm2IAEf1VtdXnC1Tq7XdIOVdGx7AcUmCaw938g4UhJXf0VIY-2-qVI3rZYv~JUY0AAoTtGK5J1TgyqEfx4MiOmH6zbdFyTe7JU4oWLlHW2tfpqwcmijpAriTXY15GgQHbh8CUWBnT~wYsq1iZE6UABFygZq8WVB2XiQehP-X97KOGMtxOBB0eeQtqQqp~UEPYjrVrAUuBCcdGkjK6GlLpdOqbd7HHz-jLowEnrRxuWDFRgYrwyA~mluG9SvqLpWe~8kMdXeb7VrB9CHqC9u35~SVMfNU9vkg~~GHrFuQCELJusU5hIJ8Ra79culd3GxI8ADs-CXb3v5ehiRuEnoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 

  const CustomRatingBar = () => {


    return (
      <View style={styles.customRatingBarstyle}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
              >

                  <Image style={{    height:40, width:40, marginTop: 8}}  
                  onPress={() =>{Alert.alert(defaultRating + '/' + maxRating.length);}}
                  source={
                    item <= defaultRating
                    ? {uri: startImgFilled}
                    : {uri: starImgCorner}
                  }
                 
                  />

              </TouchableOpacity>
            )
          })
        }


      </View>
    )
  };

  function handleSignin(){
    const data = {
      postoName,
      postoEnder,
      defaultRating,
      precoGaso,
      precoDiesel,
      precoEtanol,
      isShell,
      isBr,
      isIpiranga,
      isSete,
    }
    console.log(data);
  }


  return(

    
    <View style={{alignItems: 'center', width: '100%'}}>
      
                  <View style={styles.Config}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
                        </TouchableOpacity>

                        <Text style={styles.Text}>{t('Configurações')} </Text>
                  </View>
        <ScrollView>
    <View style={styles.card}>

      <Text style={styles.combustivel} >{isShell ? "Posto Shell" : "" || isBr ? "Posto Petrobras" : "" || isIpiranga ? "Posto Ipiranga" : "" || isSete ? "Posto Sete Estrelas" : ""}</Text>


    <View style={{ flexDirection: "row",  justifyContent: 'center', alignItems: 'center',}}>
      <View style={styles.iconBan}>
        <Checkbox style={styles.checkbox} value={isShell} onValueChange={setShell} color='#62D9AD'/>
            <Image
              style={{    height: 35, width: 40,}}
              source={require('../../assets/shell.png')}/>
      </View>

    <View style={styles.iconBan}>
        <Checkbox style={styles.checkbox} value={isBr} onValueChange={setBr} color='#62D9AD'/>
            <Image
              style={{    height: 35, width: 40,}}
              source={{uri: 'https://seeklogo.com/images/P/Petrobras-logo-03DABEE0AC-seeklogo.com.png'}}/>
      </View>

      <View style={styles.iconBan}>
        <Checkbox style={styles.checkbox} value={isIpiranga} onValueChange={setIpiranga} color='#62D9AD'/>
            <Image
              style={{    height: 35, width: 40,}}
              source={{uri:  'http://www.agenciacuca.com.br/wp-content/uploads/2017/11/Logo-Ipiranga-4.jpg'}}/>
      </View>

      <View style={styles.iconBan}>
        <Checkbox style={styles.checkbox} value={isSete} onValueChange={setSete} color='#62D9AD'/>
            <Image
              style={{    height: 35, width: 40,}}
              source={{uri:  'https://static.wixstatic.com/media/66a2c7_a857f9ca6d0a4d8aa32515f913e40931~mv2.png/v1/fill/w_350,h_224,al_c,lg_1,q_85,enc_auto/66a2c7_a857f9ca6d0a4d8aa32515f913e40931~mv2.png'}}/>
      </View>
          </View>
    <View style={styles.line} />






    <View style={styles.nomeEndereco}>
          <Image 
          style={styles.miniIcon}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/481/481233.png'}}/>
          <TextInput  
          placeholder={t('Nome do posto ou Bandeira...')} 
          onChangeText={setPostoName}
          value={postoName}
          color='black' 
          placeholderTextColor="#BFBFBF" >
          </TextInput>
    </View>

    <View style={styles.line} />

    <View style={styles.nomeEndereco}>
          <Image 
          style={styles.miniIcon}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/446/446075.png'}}/>
          <TextInput  
          placeholder={t('Endereço do posto...')} 
          onChangeText={setPostoEnder}
          value={postoEnder}
          color='black' 
          placeholderTextColor="#BFBFBF" >
            
          </TextInput>
    </View>

    <View style={styles.line} />






    <Text style={{fontWeight: "bold"}}>{t('Avaliação')} </Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>

      <View style={styles.line} />







      <View style={styles.preco}>
        <View style={{flexDirection: 'row', width: "70%"}}>
          <Text style={styles.rs}>Preço: R$</Text>
              <TextInput 
              style={styles.numb} 
              placeholder={t('0,00')} 
              onChangeText={setPrecoGaso}
              value={precoGaso}
              placeholderTextColor="#BFBFBF" 
              keyboardType = 'numeric'>
              </TextInput>
        </View>
        <View style={styles.lineVert} />
          <Text style={styles.combustivel}> {t('Gasolina')}</Text>
      </View>


      <View style={styles.preco}>
        <View style={{flexDirection: 'row', width: "70%"}}>
          <Text style={styles.rs}>Preço: R$</Text>
              <TextInput 
              style={styles.numb} 
              placeholder={t('0,00')} 
              onChangeText={setPrecoEtanol}
              value={precoEtanol}
              placeholderTextColor="#BFBFBF" 
              keyboardType = 'numeric'>
              </TextInput>
        </View>
        <View style={styles.lineVert} />
          <Text style={styles.combustivel}> {t('Etanol')}</Text>
      </View>



      <View style={styles.preco}>
        <View style={{flexDirection: 'row', width: "70%"}}>
          <Text style={styles.rs}>Preço: R$</Text>
              <TextInput 
              style={styles.numb} 
              placeholder={t('0,00')} 
              onChangeText={setPrecoDiesel}
              value={precoDiesel}
              placeholderTextColor="#BFBFBF" 
              keyboardType = 'numeric'>
              </TextInput>
        </View>
        <View style={styles.lineVert} />
          <Text style={styles.combustivel}> {t('Diesel')}</Text>
      </View>

 <TouchableOpacity  onPress={handleSignin}  style={styles.Edit}><Text style={{color: 'white', fontSize: 15,}}>{t('Confirmar Sugestão de posto')} </Text></TouchableOpacity>
   
    </View>
  
    </ScrollView>
    </View>
)
};

const styles = StyleSheet.create({
  
  
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  checkbox:{
    marginBottom:5,
  },
  ScrollView:{
    width:'100%',
  },
  
  icon:{
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    width: 35,
    height: 35,
  },

  nomeEndereco:{
    margin: 10,
    width: '85%',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    flexDirection: 'row'
  },

  miniIcon:{
    margin: 10,
    width: 20,
    height: 20,
  },

  Text:{
    color: '#BFBFBF',
    border: 20,
    marginTop: 15,
    borderColor: '#62D9AD',
    fontSize: 17,
    marginRight: '30%',
    width: '35%',
  },

  
  Config:{
    margin: 5,
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },


  descricao:{
    marginTop: 10,
    marginLeft: 10,
    width: 200,
  },

  iconBan:{
    marginTop: 20,
    marginLeft: '5%',
    marginRight:'5%',
  },

  nomePosto: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },

preco:{
  alignItems: 'center',
  flexDirection: 'row',
  margin: 15,
  width: '70%',
},

  numb:{
    fontSize:20,
    color: '#BFBFBF',
    fontWeight: 'bold',

  },

  rs:{
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },

  combustivel:{
    fontSize: 13,
    marginLeft: 10,
    color: '#BFBFBF',
  },

  line:{ 
  height: 1,
  backgroundColor: '#ededf2',
  marginTop: 10,
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
},

lineVert:{
  height: 40,
  backgroundColor: '#ededf2',
  marginTop: 10,
  width: 2,
  justifyContent: 'center',
  alignItems: 'center',
},

customRatingBarstyle: {
  justifyContent: 'center',
  flexDirection: 'row',
},
Edit:{
  backgroundColor: '#5EBF9B',
  padding: 10,
  paddingLeft: 30,
  paddingRight:30,
  borderRadius: 360,
  margin:10,
},


});
