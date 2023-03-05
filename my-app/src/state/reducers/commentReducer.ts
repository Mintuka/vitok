import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const commentReducer = (state: Array<any> = [], action: Action) => {
    const st = {
        comments: [],
        hasError: false,
        filteredComments: [],
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
                ]
            }
        default:
            return state
        }
}