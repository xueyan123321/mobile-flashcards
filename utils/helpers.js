import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'DECKS'

const initObject = {
    React: {
        id:1,
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        id:2,
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}


export const getDecks = () => {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initObject))
            .then((result) => {
            return AsyncStorage.getItem(DECKS_KEY)
        })
            .then(results => JSON.parse(results))
}

export const getDeck = (id)=> {
    return AsyncStorage.getItem(DECKS_KEY)
        .then(results => JSON.parse(results))
        .then(results => Object.values(results).filter(item => item.id === id))
}