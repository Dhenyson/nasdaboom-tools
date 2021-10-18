import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ScrollView, TouchableHighlight, Image, _onPressButton} from 'react-native';

import OneSignal from 'react-native-onesignal';

import Home from './src/Components/Home.js'
import About from './src/Components/About.js'
import Calc from './src/Components/Calc.js'
import ComingSoon from './src/Components/ComingSoon.js'
import Social from './src/Components/Social.js'
import Downloads from './src/Components/Downloads.js'
import Images from './src/Components/Images.js'
import NasdaboomSimulator from './src/Components/NasdaboomSimulator.js'
import News from './src/Components/News'
import Portfolio from './src/Components/Portfolio.js'
import Login from './src/Components/Login.js'

OneSignal.addEventListener('opened', this.onOpened);

export default class NewApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuSelect: 0,
      version: 0,
      modalState: true
    }

    OneSignal.addEventListener('opened', this.onOpened);

  }

  componentWillUnmount() {
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.init("key-here");
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('openResult: ', openResult);
  }
 
  RenderCompenentSelect = () => {
    switch(this.state.menuSelect){
      case 0:
        return (<Home />)
      case 1:
        return (<Calc />)
      case 2:
        return (<Portfolio />)
      case 3:
        return (<News />)
      case 4:
        return (<NasdaboomSimulator />)
      case 5:
        return (<Downloads />)
      case 6:
        return (<Images />)
      case 7:
        return (<Login />)
      case 8:
        return (<Social />)
      case 9:
        return (<About />)
      default:
        return (<ComingSoon />)
    }
  }

  menuSelect = (id = 0) => {
    this.setState({
      menuSelect: id
    })
    return id
  }

  ItensMenu = (title, url, id) => {
    return (
      <TouchableHighlight style={styles.menu} onPress={() => this.menuSelect(id)}>

         <View style={styles.menu}>

            <View style={styles.containerImage}>
              <Image style={styles.logo} source={url}/>
            </View>

            <View style={styles.containerText}>
              <Text style={styles.titleMenu}>{title}</Text>
            </View>         

          </View>
      </TouchableHighlight> 
    )
  
  }

  closeModal(){
    this.setState({
      modalState: false
    })
  }


  render(){

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>

        <View style={styles.container_main}>
          {this.RenderCompenentSelect()}
        </View>

          <View style={styles.footer}>
            
               <ScrollView  horizontal={true}>                 
                  {this.ItensMenu("Home",require('./src/images/icons/home.png'), 0)}      
                  {this.ItensMenu("Conversor",require('./src/images/icons/calc.png'), 1)} 
                  {this.ItensMenu("Login",require('./src/images/icons/nasdaboom2.png'), 7)} 
                  {/* {this.ItensMenu("Portfolio",require('./src/images/icons/portfolio.png'), 20)} */} 
                  {/* {this.ItensMenu("News",require('./src/images/icons/news.png'), 30)}  */}
                  {/* {this.ItensMenu("NasdaBoom Simulator",require('./src/images/icons/nasdaboom.png'), 40)} */}
                  {/* {this.ItensMenu("Downloads",require('./src/images/icons/downloads.png'), 50)}  */}
                  {/* {this.ItensMenu("Midia",require('./src/images/icons/images.png'), 60)}  */}
                  {this.ItensMenu("Social",require('./src/images/icons/whatsapp.png'), 8)} 
                  {this.ItensMenu("About.",require('./src/images/icons/about.png'), 9)}                 
               </ScrollView>
               
          </View>
     
      </View> 
    )
  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: '7%',
    flex: 1,
    backgroundColor: '#260633',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  },
  container_main: {
    flex: 0.99,
    width: Dimensions.get('window').width,
    backgroundColor: '#260633',
    justifyContent: 'center'
  },
  menu:{
    width: Dimensions.get('window').width / 3.8,
    height: Dimensions.get('window').width / 4,
    backgroundColor: '#300742',
    alignItems: 'center',
    borderWidth: 1
},
titleMenu:{
    color: '#ADF833',
    fontSize: 15,
    textAlign: 'center'
},
containerImage:{
    flex: 2,
    justifyContent: 'center',
},
containerText:{
    flex: 1
},
logo:{
    width: Dimensions.get('window').width / 11,
    height: Dimensions.get('window').width / 11,
},
modal:{
  marginVertical: Dimensions.get('window').height / 10,
  marginHorizontal: Dimensions.get('window').width / 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#eebb2a'
}
});

