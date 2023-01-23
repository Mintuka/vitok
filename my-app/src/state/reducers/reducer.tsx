import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const reducer = (state: Array<any> = [], action: Action) => {
    switch(action.type){
        case ActionType.GET_ALL:
            return action.payload
        case ActionType.CREATE:
            return [...state,action.payload]
        case ActionType.CREATE_USER:
            return [action.payload]
        case ActionType.LOGIN_USER:
            return [action.payload]
        default:
            return state
        }
}