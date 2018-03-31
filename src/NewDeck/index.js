import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { saveDeckTitle } from "../../utils/helpers";

class NewDeck extends Component{
    state = {
        title:''
    }
    render(){
        return (
            <View  style={style.container}>
                <Text style={{fontSize:25, textAlign:'center'}}>
                    What is the title of your new Deck?
                </Text>
                <TextInput
                    style={style.textInput}
                    onChangeText={(title) => {
                        console.log(title)
                        this.setState({title})
                    }}
                    value={this.state.title}
                />
                <TouchableOpacity style={style.submit} onPress={() => {
                    saveDeckTitle(this.state.title).then((err, results) => {
                        this.props.navigation.navigate('Deck', {
                            key:this.state.title,
                            questions:[]
                        })
                    })
                }}>
                    <Text style={{color:'#fff', fontSize:30}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:150
    },
    textInput:{
        height: 40,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:40
    },
    submit:{
        marginTop:50,
        width:160,
        height:50,
        alignItems:'center',
        backgroundColor: 'black'
    }
})

export default NewDeck