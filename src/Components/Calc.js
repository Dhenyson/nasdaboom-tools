import React from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight} from 'react-native'

import getStatePrice from '../functions/getStatePrice'
import getCoins from '../functions/getCoins'


export default class Calc extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            nasdacoin: 'connecting...',
            bitcoin: 'connecting...',
            dollar: 'connecting...',
            real: 'connecting...',
            euro: 'connecting...',
            value_nasdacoin: 0,
            value_bitcoin: 0,
            value_dollar: 1,
            value_real: 0,
            value_euro: 0,
            
        }
    }

    componentDidMount(){

        getCoins().then(data =>  {
            this.setState({
                value_nasdacoin: data.nasdacoin.price,
                value_bitcoin: parseFloat(data.bitcoin.price),
                nasdacoin: 0,
                bitcoin: 0
            })
            /* console.log(`nasdacoin inicial: `, this.state.value_nasdacoin) */
        })

        getStatePrice().then(result => {
            this.setState({
                value_euro: parseFloat((result.eur_usd).replace(/,/g, '.')),
                value_real: parseFloat((result.usd_brl).replace(/,/g, '.')),
                dollar: 0,
                real: 0,
                euro: 0
            })
            /* console.log(`getStatePrice R$: `, parseFloat((result.usd_brl).replace(/,/g, '.')))
            console.log(' ') */
        })
    }

    onChanged (text, coin) {
        this.setState({
            [coin]: text.replace(/[^0-9.]/g, ''),
        });
       /*  console.log(this.state[coin]) */
    }

    onFocus (coin) {
        this.setState({
            [coin]: '',
        });
    }

    formatValueInput(number){
        return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    item(name, value){
        return(
            <View>
                <Text style={styles.text}>{name.toUpperCase()}</Text>
                    <View style={styles.containerItem}>
                        <TextInput 
                            value={(this.state[name])}
                            onFocus={() => this.onFocus(name)}
                            onChangeText={(text) => this.onChanged(text, name)}
                            Text style={styles.input} 
                            keyboardType='numeric'
                        />
                        <TouchableHighlight style={styles.button} onPress={() => this[name]()}>
                            <Text style={styles.fontButton}>GO</Text>
                        </TouchableHighlight>
                    </View>
            </View>
             
        )        
    }

    nasdacoin(){
        this.setState({
            dollar: `U$ ${(this.state.nasdacoin * this.state.value_nasdacoin).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            bitcoin: ((this.state.nasdacoin * this.state.value_nasdacoin) / this.state.value_bitcoin).toFixed(8),
            real: `R$ ${((this.state.nasdacoin * this.state.value_nasdacoin) * this.state.value_real).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            euro: `EUR ${ ((((this.state.nasdacoin * this.state.value_nasdacoin) / this.state.value_bitcoin) * this.state.value_bitcoin)  / this.state.value_euro).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        })
    }

    bitcoin(){
        this.setState({
            dollar:`U$ ${ (this.state.bitcoin * this.state.value_bitcoin).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            nasdacoin: ((this.state.bitcoin * this.state.value_bitcoin) / this.state.value_nasdacoin).toFixed(8),
            real: `R$ ${((this.state.bitcoin * this.state.value_bitcoin) * this.state.value_real).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            euro: `EUR ${ ((this.state.bitcoin * this.state.value_bitcoin)  / this.state.value_euro).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        })
    }

    dollar(){
        this.setState({
            nasdacoin: `${(this.state.dollar / this.state.value_nasdacoin).toFixed(8)}`,
            bitcoin: (this.state.dollar / this.state.value_bitcoin).toFixed(8),
            real: `R$ ${(this.state.dollar * this.state.value_real).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            euro: `EUR ${(this.state.dollar / this.state.value_euro).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        })
    }

    real(){
        this.setState({
            dollar: `U$ ${(this.state.real / this.state.value_real).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
            bitcoin: ((this.state.real / this.state.value_real) / this.state.value_bitcoin).toFixed(8),
            nasdacoin: ((this.state.real / this.state.value_real) / this.state.value_nasdacoin).toFixed(8),
            euro: `EUR ${((this.state.real / this.state.value_real) / this.state.value_euro).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`,
        })
    }

    euro(){
        this.setState({
            dollar: `U$ ${(this.state.euro * this.state.value_euro).toFixed(2)}`,
            bitcoin: ((this.state.euro * this.state.value_euro) / this.state.value_bitcoin).toFixed(8),
            real: `R$ ${((this.state.euro * this.state.value_euro) * this.state.value_real).toFixed(2)}`,
            nasdacoin: ((this.state.euro * this.state.value_euro) / this.state.value_nasdacoin).toFixed(8),
        })
    }

    render(){
        return (
            <View style={styles.container}>
                  
                <ScrollView>
                    {this.item('nasdacoin')}
                    {this.item('bitcoin')}
                    {this.item('dollar')}
                    {this.item('real')}
                    {this.item('euro')}
                </ScrollView>   

            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#260633', // #f15215 #932956 #490664 #d95636 #ed652a #5b0d7c #300742 #ADF833
        paddingHorizontal: '2%',
    },
    containerItem:{
        flexDirection: 'row',
        height: 50,
        marginBottom: 20
    },
    text:{
        color: '#ADF833',
        fontSize: 20
    },
    input:{
        flex: 4,
        color: '#000',
        backgroundColor: '#F9DBFE',
        fontSize: 30
    },
    button:{
        flex: 1,
        backgroundColor: '#fe8c0e',
        justifyContent: 'center'
    },
    fontButton:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 30
    }
})