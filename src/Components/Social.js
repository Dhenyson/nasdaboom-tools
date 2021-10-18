import React from 'react'
import {View, Dimensions, StyleSheet, Image, Linking, TouchableHighlight, ScrollView} from 'react-native'

const Social = () => {

    const ItensMenu = (imageURL, siteURL) => {
        return (
            <TouchableHighlight style={styles.menu} onPress={() => {Linking.openURL(siteURL)}}>
                    <View>
                        <Image style={styles.logo} source={imageURL}/>
                    </View>       
            </TouchableHighlight> 
        )
      
    }

    return (
        <View>
            <ScrollView>
            <View style={styles.container}>
                
                    {ItensMenu(require('../images/social/Whatsapp-250x250.png'), 'https://api.whatsapp.com/send?phone=5581999508031')}
                    {ItensMenu(require('../images/social/Facebook-250x250.png'), 'https://www.facebook.com/nasdaboomNSD')}
                    {ItensMenu(require('../images/social/Instagram-250x250.png'), 'https://www.instagram.com/nasdaboom.io/?hl=pt-br')}
                    {ItensMenu(require('../images/social/Telegram-250x250.png'), 'https://t.me/nasdaboom')}
                    {ItensMenu(require('../images/social/Youtube-250x250.png'), 'https://www.youtube.com/channel/UC83aBQ-YVRRWaPWeIZ527FQ')}
                    {ItensMenu(require('../images/social/Nasdaboom-250x250.png'), 'https://nasdaboom.io/')}
                
            </View>
            </ScrollView>   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#260633',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    logo:{
        width: Dimensions.get('window').width / 2.5,
        height: Dimensions.get('window').width / 2.5,
        margin: 3
    },
})

export default Social