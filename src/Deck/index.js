import React, { Component } from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import {gray} from "../../utils/colors";

class Deck extends Component{
    static navigationOptions = ({ navigation }) => {
        const { key } = navigation.state.params

        return {
            title: key
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.navigation.state.params.key}</Text>
                <Text style={styles.cardNumbers}>{this.props.navigation.state.params.questions.length
                } cards</Text>
                <TouchableOpacity style={styles.addCard}>
                    <Text onPress={() => {
                        console.log('2223233')
                        this.props.navigation.navigate('addCard', {
                            title: 'Add Card',
                            DeckTitle: this.props.navigation.state.params.key
                        })
                    }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startQuiz} onPress={() => {
                    this.props.navigation.navigate('Quiz', {
                        questions: this.props.navigation.state.params.questions
                    })
                }}>
                    <Text style={{color: '#fff'}}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        height:100
    },
    title: {
        fontSize:50,
        fontWeight:'bold',
        marginTop:150,
        marginBottom:10
    },
    cardNumbers: {
        color: gray,
        fontSize:20,
        marginBottom:40
    },
    addCard:{
        padding:20,
        marginBottom:20,
        borderColor: '#000',
        borderWidth:2,
        borderRadius:5
    },
    startQuiz:{
        padding:20,
        borderColor: 'black',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#000'
    }
})

export default Deck