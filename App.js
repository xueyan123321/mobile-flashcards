import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './src/DeckList/index'
import NewDeck from './src/NewDeck/index'
import Deck from './src/Deck/index'
import addCard from './src/addCard/index'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reduce from './src/DeckList/reducer'
import { white, purple, gray } from './utils/colors'
import Quiz from './src/Quiz/index'
import { setLocalNotification } from "./utils/helpers";


const Tabs = TabNavigator({
    DeckList:{
        screen: DeckList,
    },
    NewDeck:{
        screen: NewDeck
    }
},{
    tabBarOptions:{
        style:{
            backgroundColor:purple
        }
    }
})

const Stacks = StackNavigator({
    Decks:{
        screen:Tabs,
        navigationOptions:{
            headerStyle:{
                height:5,
                backgroundColor:gray
            }
        }
    },
    Deck:{
        screen: Deck,
        navigationOptions:{
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    Quiz:{
        screen: Quiz,
        navigationOptions:{
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    addCard:{
        screen:addCard,
        navigationOptions:{
            headerTintColor:white,
            headerStyle:{
                backgroundColor:purple
            }
        }
    }
})

export default class App extends React.Component {
    componentDidMount(){
        // set the notification
        setLocalNotification()
    }
    render() {
    return (
        <Provider store={createStore(reduce, applyMiddleware(thunk))}>
          <View style={styles.container}>
            <Stacks/>
          </View>
        </Provider>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
