import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

type TypeComment = {
    comments: Array<any>,
    errorMessage: string
}

export const commentReducer = (state: TypeComment = {comments:[], errorMessage:''} , action: Action) => {

    switch(action.type){
        case ActionType.GET_COMMENT:

            return {
                ...state,
                comments: [...action.payload],
                errorMessage: ''
            }
            
        case ActionType.CREATE_COMMENT:
            return  {
                ...state,
                comments: [
                    action.payload,
                    ...state.comments
                ],
                errorMessage:''
            }

        case ActionType.ERROR:
            return {
                ...state,
                errorMessage: action.payload.message
            }
        default:
            return state
        }
}