import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { red } from "../../utils/colors";


class Quiz extends Component{
    static navigationOptions = ({navigation})=>{
        return {
            title: 'Quiz'
        }
    }
    state= {
      questions: this.props.navigation.state.params.questions,
      index:0,
      status:'question',
      correctCount:0
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params.questions, 'questions')
    }
    render(){
        return (
            <View>
                {this.state.questions.filter((item,index) => index === this.state.index).map(item =>(
                    <View key={item.question} style={styles.container}>
                        <View>
                            <Text>
                                {this.state.index+1}/{this.state.questions.length}
                            </Text>
                        </View>
                        {this.state.status === 'question'?<View style={styles.title}>
                                                                <Text style={{fontSize:35}}>
                                                                    {item.question}
                                                                </Text>
                                                                <TouchableOpacity style={styles.answer} onPress={()=>{
                                                                    this.setState({
                                                                        status:'answer'
                                                                    })
                                                                }}>
                                                                    <Text style={{color:red, fontSize:20}}>Answer</Text>
                                                                </TouchableOpacity>
                                                            </View>:<View style={styles.title}>
                                                                <Text style={{fontSize:25, textAlign:'center'}}>
                                                                    {item.answer}
                                                                </Text>
                                                                <TouchableOpacity style={styles.question} onPress={()=>{
                                                                    this.setState({
                                                                        status:'question'
                                                                    })
                                                                }}>
                                                                    <Text style={{color:red, fontSize:20}}>Question</Text>
                                                                </TouchableOpacity>
                                                            </View>
                        }
                        <View style={styles.record}>
                            <TouchableOpacity style={styles.correct} onPress={() => {
                                if(this.state.index < this.state.questions.length)
                                {
                                    this.setState(preState =>({
                                        index: preState.index+1,
                                        status:'question',
                                        correctCount:preState.correctCount+1
                                    }))
                                }
                            }}>
                                <Text style={{color:'#fff'}}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.incorrect} onPress={() => {
                                this.setState(preState =>({
                                    index:preState.index+1
                                }))
                            }}>
                                <Text style={{color:'#fff'}}>InCorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                {this.state.index === this.state.questions.length?<View style={styles.percentage}>
                    <Text style={{fontSize:25}}>Percentage Correct: {this.state.correctCount/this.state.questions.length*100}%</Text>
                    <TouchableOpacity style={styles.restart} onPress={()=> {
                        this.setState({
                            index:0
                        })
                    }}>
                        <Text>ReStart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.back} onPress={()=>{
                        this.props.navigation.goBack()
                    }}>
                        <Text style={{color:'#fff'}}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>:<View></View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        flex:1,
        marginTop:120,
        alignItems:'center'
    },
    answer:{
        padding:30
    },
    question:{
        padding:30
    },
    correct:{
        alignItems:'center',
        justifyContent: 'center',
        height:40,
        width:100,
        backgroundColor:'green'
    },
    incorrect:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        height:40,
        width:100,
        backgroundColor:red
    },
    record:{
        flex:1,
        marginTop:250,
        alignItems:'center'
    },
    percentage:{
        flex:1,
        alignItems:'center',
        marginTop:200
        // alignItems:'center',
        // justifyContent:'center',
    },
    restart:{
        flex:1,
        justifyContent:'center',
        padding:20,
        marginTop:20,
        marginBottom:20,
        borderColor: '#000',
        borderWidth:2,
        borderRadius:5
    },
    back:{
        flex:1,
        justifyContent:'center',
        padding:20,
        borderColor: 'black',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#000'
    }
})

export default Quiz

