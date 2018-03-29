import { AsyncStorage } from 'react-native'
import uuid from 'react-native-uuid'

const DECKS_KEY = 'DECKS'

const initObject = {
    React: {
        // id:uuid.v1(),
        title: 'React',
        questions: [
            {
                id:uuid.v1(),
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                id:uuid.v1(),
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        // id:uuid.v1(),
        title: 'JavaScript',
        questions: [
            {
                id:uuid.v1(),
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export  const setDecks = (Object = initObject) => {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(Object))
}


export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY)
        .then(results => JSON.parse(results))
}

export const getDeck = (id)=> {
    return AsyncStorage.getItem(DECKS_KEY)
        .then(results => JSON.parse(results))
        .then(results => Object.values(results).filter(item => item.id === id))
}

export const saveDeckTitle = (title) => {
    console.log(title, 'title')
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
        [title]:{
            // id:uuid.v1(),
            title:title,
            questions:[]
        }
    }))
}

export const addCardToDeck = (title, card) => {
    return AsyncStorage.getItem(DECKS_KEY)
        .then(results => JSON.parse(results))
        .then((results) =>  {
            results[title].questions.push(card)
            return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(results))
        })
}