export const GET_QUESTIONS = 'GET_QUESTIONS'

export function getQuestions(title){
    return {
        type: GET_QUESTIONS,
        title
    }
}
