import React from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'

import getData from '../functions/getData'


export default class Alert extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            msgTitle: 'Notification',
            message: ''
        }
    }

    componentDidMount(){
        getData().then(data => { 
            this.setState({
                message: data.data.msg.message, 
                title: data.data.msg.title
            })
            //console.log(data)
        })
    }

    render(){
        return (                
            <View style={styles.alerts}>
                  <Text style={styles.title}>{this.state.title}</Text>
                <ScrollView>
                    <Text style={styles.msg}>{this.state.message}</Text>
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    alerts:{
        marginVertical: '15%',
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eebb2a'
      },
      title:{
          fontSize: 25,
          fontWeight: 'bold',
          paddingBottom: 20
      },
      msg:{
          fontSize: 20,
      }
})