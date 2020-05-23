import { initialState } from "../Store/Store";
import { ADD_USER, ADD_QUESTION, ADD_ANSWER, ACCEPT_ANSWER, DECLINE_ANSWER } from "../Actions/Actions";

export default function Reducer(state = initialState, action) {

    switch(action.type) {
        case ADD_USER: return {
            ...state,
            user: action.user
        }

        case ADD_QUESTION: return {
            ...state,
            questions: [...state.questions, {
                id:state.qId+1,
                date:new Date().toLocaleString(),
                user: action.question.user,
                title: action.question.title,
                text: action.question.text,
                tags: action.question.tags,
                answers: []
            }],
            qId: state.qId+1
        }

        case ADD_ANSWER: return {
            ...state,
            questions: state.questions.find(item => item.id === action.questId) ?
            state.questions.map(quest => {
                if(quest.id === action.questId) {
                    return {
                        ...quest,
                        answers: [...quest.answers,{text:action.answer,isAccepted:0}]
                    }
                }
                return quest;
            }) : state.questions
        }

        case ACCEPT_ANSWER: return {
            ...state,
            questions: state.questions.find(quest => quest.id === action.questId) ?
            state.questions.map(quest => {
                if(quest.id === action.questId) {
                    return {
                        ...quest,
                        answers: quest.answers.map(answer => {
                            if(answer.text === action.answer) {
                                return {
                                    ...answer,
                                    isAccepted: 1
                                }
                            }
                            return answer;
                        })
                    }
                }
                return quest;
            }) : state.questions
        }

        case DECLINE_ANSWER: return {
            ...state,
            questions: state.questions.find(quest => quest.id === action.questId) ?
            state.questions.map(quest => {
                if(quest.id === action.questId) {
                    return {
                        ...quest,
                        answers: quest.answers.map(answer => {
                            if(answer.text === action.answer) {
                                return {
                                    ...answer,
                                    isAccepted: 0
                                }
                            }
                            return answer;
                        })
                    }
                }
                return quest;
            }) : state.questions
        }

        default: return state;
    }
}