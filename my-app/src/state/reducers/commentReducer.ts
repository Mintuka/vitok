import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const commentReducer = ( action: Action) => {
    const st = {
        comments: [],
        errorMessage: ''
    } 
    switch(action.type){
        case ActionType.GET_COMMENT:
            return action.payload
        case ActionType.CREATE_COMMENT:
            return {
                ...st,
                comments: [
                    ...st.comments,
                    action.payload
                ],
                errorMessage:''
            }
        case ActionType.ERROR:
            return {
                ...st,
                errorMessage: action.payload.message
            }
        default:
            return st
        }
}