import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const postReducer = (state: Array<any> = [], action: Action) => {
    switch(action.type){
        case ActionType.GET_ALL:
            return action.payload
        case ActionType.CREATE:
            return [...state,action.payload]
        case ActionType.UPDATE:
            return [action.payload]
        default:
            return state
        }
}