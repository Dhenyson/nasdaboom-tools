import React from 'react'
import {View, StyleSheet} from 'react-native'
import { WebView } from 'react-native-webview'

const Login = () => {

        return (
            <View style={styles.container} >
                <WebView
                    source={{ uri: 'https://bo.nasdaboom.io/login' }}
                    style={{backgroundColor:"#1d072e"}}
                />
            </View>
           
        )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1d072e",
        width: '100%',
        height: '100%',
    }
})

export default Login