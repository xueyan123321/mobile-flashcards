import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function NewDeck(){
    return (
        <View  style={style.container}>
            <Text>
                New Deck
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    }
})