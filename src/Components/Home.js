import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'

import getCoins from '../functions/getCoins'

//etCoins().then(data => { console.log(data.bitcoin.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) })

const arrayTest = ['um', 'dois', 'tres']
const arrayTest2 = [<Text>ola</Text>, <Text>de novo</Text>]


const Itens = (coin, value, change, volume, supply, market_cap) => {

    return (
          <View style={styles.containerItem}>

                <View style={styles.containerTitle}>

                    <View style={styles.titleGrupo1}>
                        <Text style={styles.namecoin}>{`${coin}`}</Text>
                        <Text style={styles.textPrice}>{`${value}`}</Text>
                    </View>

                    <View style={styles.containerChange}>
                         <Text style={styles.textChange}>{`${change}`}</Text>
                         <Text style={styles.textChange24}>(24h)</Text>
                    </View>

                </View>
                


                <View style={styles.containerTexts}>

                    <View style={styles.textGroup1}>
                        <Text style={styles.textTitulos}>Volume (24h):</Text>
                        <Text style={styles.textTitulos}>In circulation:</Text>
                        <Text style={styles.textTitulos}>Market cap:</Text>
                    </View>

                    <View style={styles.textGroup2}>
                        <Text style={styles.textValues}>{`$ ${volume}`}</Text>
                        <Text style={styles.textValues}>{`${supply}`}</Text>
                        <Text style={styles.textValues}>{`$ ${market_cap}`}</Text>
                    </View>
                    
                </View>
                 
        </View>
    )
  
}



export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            coins:  {
                bitcoin:  {
                  change24: 0,
                  circulation: 0,
                  image: '',
                  name: "Loading...",
                  price: 0,
                  volume24: 0,
                  market_cap: 0
                },
                ethereum:  {
                  change24: 0,
                  circulation: 0,
                  image: '',
                  name: "Loading...",
                  price: 0,
                  volume24: 0,
                  market_cap: 0
                },
                litecoin:  {
                  change24: 0,
                  circulation: 0,
                  image: '',
                  name: "Loading...",
                  price: 0,
                  volume24: 0,
                  market_cap: 0
                },
                nasdacoin:  {
                  change24: 0,
                  circulation: 0,
                  image: '',
                  name: "Loading...",
                  price: 0,
                  volume24: 0,
                  market_cap: 0
                },
                xrp:  {
                  change24: 0,
                  circulation: 0,
                  image: '',
                  name: "Loading...",
                  price: 0,
                  volume24: 0,
                  market_cap: 0
                },
              }
        }
    }

    componentDidMount(){
            getCoins().then(data =>  {
                this.setState({
                    coins: data
                })
                /* console.log(data) */
            } )
    }

    retornaComponente = () => {
        let arrayCoins = []
        let coinsName = Object.keys(this.state.coins)
        /* console.log(coinsName) */

        for(let i = 0; i < coinsName.length; i++){
            arrayCoins[i+1] = Itens(   this.state.coins[coinsName[i]].name, 
                                `$ ${this.state.coins[coinsName[i]].price}`, 
                                  `${this.state.coins[coinsName[i]].change24}%`,
                                     this.state.coins[coinsName[i]].volume24,
                                     this.state.coins[coinsName[i]].circulation,
                                     this.state.coins[coinsName[i]].market_cap
                                    )
            arrayCoins[0] = Itens(   this.state.coins[coinsName[i]].name, 
                `$ ${this.state.coins[coinsName[i]].price}`, 
                    `${this.state.coins[coinsName[i]].change24}%`,
                        this.state.coins[coinsName[i]].volume24,
                        this.state.coins[coinsName[i]].circulation,
                        this.state.coins[coinsName[i]].market_cap
                    )                        
        }

        arrayCoins.pop()

        return arrayCoins
    }

    render(){
        return (
            
            <View style={styles.container}>
                    <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>    
                        {this.retornaComponente()}            
                    </ScrollView>
            </View>
           
                
               
            )
    }

    
}

const styles = StyleSheet.create({
    container:{
        width: '100%',   
        alignItems: 'center'   ,
        padding: '3%'  
    },
    scrollStyle:{
        width: '100%'
    },
    containerItem:{
        backgroundColor:'#5b0d7c', // #f15215 #932956 #490664 #d95636 #ed652a #5b0d7c
        marginBottom: '5%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: '2%'
        

    },
    containerTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPrice:{
        fontSize: 25,
        color: '#fff', // #ADF833 #05C7B9
        fontWeight: 'bold',
    },
    namecoin:{
        color: '#ADF833',
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerTexts:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    titleGrupo1:{
        flex: 2,
        
    },
    containerChange:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textGroup1:{
        
        alignItems: 'flex-start',
    },  
    textGroup2:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textTitulos:{
        fontWeight: 'bold',
        color: '#fff'
    },
    textValues:{
        fontWeight: 'bold',
        color: '#fff'
    },
    textChange:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    textChange24:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },

})