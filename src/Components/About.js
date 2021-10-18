import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import getData from '../functions/getData'

export default class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nameApp: 'NasdaBoom Tools',
            versionApp: '1.0',
            updateAvailable: '',
            lastUpdate: 'September 21, 2020',
            paragraph1: 'NasdaBoom tools is an application that aims to offer severaldigital tools that can facilitate the way people in the NasdaBoom community search for information, make calculations or follow the news in real time from this community, integrating everything in one place.',
            paragraph2: 'This application is not managed by https://nasdaboom.io; its control is independent. Developed by Dhenyson Jhean, NasdaBoom and cryptocurrency enthusiast.'
        }
    }

    componentDidMount(){
        getData().then(data =>  {
            if(this.state.versionApp < data.data.version){
                this.setState({
                    updateAvailable: 'New version available. -> v' + data.data.version,
                })
            }
            this.setState({
                nameApp: data.data.about.nameApp,
                paragraph1: data.data.about.paragraph1,
                paragraph2: data.data.about.paragraph2,
            })
            getCoinsDois().then(price => {
                this.setState({
                    lastUpdate: price.price,
                })
              })
              
        })
    }


    render(){

      

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{`Name: ${this.state.nameApp}`}</Text>
                <Text style={styles.text}>{`Your verison: ${this.state.versionApp}`}</Text>
                <Text style={styles.text}>{`Last update: ${this.state.lastUpdate}`}</Text>
    
                <Text style={styles.textUpdate}>{`${this.state.updateAvailable}`}</Text>
            
                <Text style={styles.text}>{this.state.paragraph1}</Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>{this.state.paragraph2}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1b0728',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '3%'
    },
    text:{
        color: '#f2b671',
        textAlign: 'center',
        fontSize: 20
    },
    textUpdate:{
        color: 'red',
        textAlign: 'center',
        fontSize: 20
    }
})