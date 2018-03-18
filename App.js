import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './src/DeckList/index'
import NewDeck from './src/NewDeck/index'
import Deck from './src/Deck/index'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import { white, purple, gray } from './utils/colors'
import Quiz from './src/Quiz/index'

const Tabs = TabNavigator({
    Decks:{
        screen: DeckList
    },
    NewDeck:{
        screen: NewDeck
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
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
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
