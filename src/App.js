
import React from 'react';
import {Text,StyleSheet, View, Image, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card';


const App =() =>{

  function handleRedeSocial(redesSociais){
    switch(redesSociais){
      case 'linkedin':
          Alert.alert('Meu LinkedIn','https://www.linkedin.com/in/meiramatheus/')
          break
          case 'github':
          Alert.alert('Meu Github','https://github.com/meiramatheus27')
          break
          case 'facebook':
          Alert.alert('Meu Facebook','https://www.facebook.com/MatheusMeira27')
          break
    }
  }
  return(
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Matheus Meira</Text>
        <Text style={style.funcao}>Computer Engineer</Text>
        <View style={style.redes_sociais}>
        <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
          <Icon name= "github" size={30} />
          </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
          <Icon name= "facebook" size={30}/>
          </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
          <Icon name= "linkedin" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
     <Card titulo="Formação academica">
     <Text style={style.card_content_text}>Uninassau</Text>
            <Text style={style.card_content_text}>DIO</Text>
            <Text style={style.card_content_text}>Cultura Inglesa</Text>
     </Card>
     <Card titulo="Experiencia Profissional">
     <Text style={style.card_content_text}>Heineken</Text>
            <Text style={style.card_content_text}>Transmeira</Text>
            <Text style={style.card_content_text}>Avanade</Text>
     </Card>
      </View>
      </>
      );
} ;

const style=StyleSheet.create({

  page:{
    backgroundColor: '#E7E7E7',
    flex:1,
        
  },
  container_cabecalho: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
  },
  foto:{
    width:200,
    height:200,
    borderRadius:100,
  },
  nome:{
    fontSize: 26,
    fontWeight:'bold',
    marginTop: 10,
  },
  funcao:{
    
    marginBottom: 10,
    color:'#939393',
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'60%',
    marginTop:20,
  },
  card_content_text:{
    color: '#939393',
    marginBottom: 10,
  }
 });

export default App;
