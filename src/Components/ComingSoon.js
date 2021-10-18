import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ComingSoon = () => {
    return (
        <View style={styles.container}>
             <Text style={{color:'#fff', paddingBottom: 20, fontSize:30}}>Coming Soon!</Text>
             <Image style={styles.image} source={require('../images/maintenance.png')}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#260633',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 130,
        height: 130,
    }
})

export default ComingSoon