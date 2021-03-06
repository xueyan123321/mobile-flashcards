import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { List } from 'antd-mobile'
import { fetchDecks } from "./action";
import { connect } from 'react-redux'

const Item = List.Item

class DeckList extends Component{
    /**
     *@description return a list of decks
     */
    componentDidMount(){
        this.props.dispatch(fetchDecks())
    }
    render() {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                <List renderHeader={() => 'Deck List'}>
                    {Object.keys(decks).map((key) => (
                        <Item key={key}>
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                this.props.navigation.navigate("Deck", {
                                    key,
                                    questions:decks[key].questions
                                })
                            }}>
                                <Text>{key}</Text>
                                <Text>{decks[key].questions?decks[key].questions.length:0} cards</Text>
                            </TouchableOpacity>
                        </Item>
                    ))}
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btn:{
        padding:10,
        paddingLeft:50,
        paddingRight:50,
        paddingBottom:50,
        justifyContent:'center',
        alignItems: 'center',
    }
})

function mapStateToProps(state){
    console.log('decksMap', state)
    return {
        decks:state
    }
}

export default connect(mapStateToProps)(DeckList)