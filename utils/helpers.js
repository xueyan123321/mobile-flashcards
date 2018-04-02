import { AsyncStorage } from 'react-native'
import uuid from 'react-native-uuid'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'notification'

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

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
    return {
        title: 'Quiz Reminder',
        body: "Don't forget to at least one quiz today!",
        ios: {
            sound: true,
        },
        android:{
            sound:true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null){
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if(status === 'granted'){
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate()+1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time:tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}