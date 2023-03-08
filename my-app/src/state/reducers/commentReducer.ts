import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/comment_interface/interfaces"

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

        case ActionType.UPDATE_COMMENT:
            const updated = state.comments.map((comment) => {
                if (comment._id === action.payload[0]){
                    return action.payload[1]
                } 
                return comment
            })
            console.log('Comment-Update-Action', updated)
            return {
                ...state,
                comments: [...updated],
                errorMessage: ''
            }

        case ActionType.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((comment) => comment._id !== action.payload),
                errorMessage: ''
            }

        case ActionType.COMMENT_ERROR:
            return {
                ...state,
                errorMessage: action.payload.message
            }
        default:
            return state
        }
}