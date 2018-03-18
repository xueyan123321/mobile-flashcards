import { getDecks } from '../../utils/helpers'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const fetchDecks = () => dispatch => getDecks().then((decks) => {
    dispatch(receiveDecks(decks))
})