import React, { Component } from 'react'
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { addCardToDeck } from "../../utils/helpers";

class addCard extends Component{
    state = {
        question:'',
        answer:''
    }
    static navigationOptions = ({navigation}) => {
        const { title } = navigation.state.params

        return {
            title
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Question</Text>
                <TextInput style={styles.textInput} onChangeText={(question) => {
                    this.setState({
                        question
                    })
                }} value={this.state.question}></TextInput>
                <Text>Answer</Text>
                <TextInput style={styles.textInput} onChangeText={(answer) => {
                    this.setState({
                        answer
                    })
                }} value={this.state.answer}></TextInput>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={{color:'#fff', fontSize:30}} onPress={() => {
                        addCardToDeck(this.props.navigation.state.params.DeckTitle, this.state).then(() => {
                            this.props.navigation.navigate('Decks')
                        })
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
        marginTop:30,
    },
    textInput:{
        height: 40,
        width:300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:20
    },
    submitBtn:{
        marginTop:50,
        width:160,
        height:50,
        alignItems:'center',
        backgroundColor: 'black'
    }
})

export default addCard