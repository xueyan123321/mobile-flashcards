import { RECEIVE_DECKS } from './action'

export function decks(state={}, action){
    const {type, decks, title} = action
    console.log('actiondecks',action.decks)
    switch(type){
        case RECEIVE_DECKS:
            return {
                ...state,
                ...decks
            }
        default:
            return state
    }
}

