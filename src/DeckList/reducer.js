import { RECEIVE_DECKS } from './action'
import { GET_QUESTIONS } from "../Quiz/action";

export function decks(state={}, action){
    const {type, decks, title} = action
    console.log('actiondecks',action.decks)
    switch(type){
        case RECEIVE_DECKS:
            return {
                ...state,
                ...decks
            }
        case GET_QUESTIONS:

        default:
            return state
    }
}

