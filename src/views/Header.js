import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} 
                 source={require('../images/Logo_Wioxi_100x100.png')}
             />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    logo:{
        width: 200,
        height: 50,
    }

})

export default Header