const ADD_USER = 'ADD_USER';
const ADD_QUESTION = 'ADD_QUESTION';
const ADD_ANSWER = 'ADD_ANSWER';
const ACCEPT_ANSWER = 'ACCEPT_ANSWER';
const DECLINE_ANSWER = 'DECLINE_ANSWER';

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function addAnswer(answer,questId) {
    return {
        type: ADD_ANSWER,
        answer,
        questId
    }
}

function acceptAnswer(answer,questId) {
    return {
        type: ACCEPT_ANSWER,
        answer,
        questId
    }
}

function declineAnswer(answer,questId) {
    return {
        type: DECLINE_ANSWER,
        answer,
        questId
    }
}

export {ADD_USER,addUser,ADD_QUESTION,addQuestion,ADD_ANSWER,addAnswer,ACCEPT_ANSWER,acceptAnswer,DECLINE_ANSWER,declineAnswer}