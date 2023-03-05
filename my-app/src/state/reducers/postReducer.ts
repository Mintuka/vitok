import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"
import { update } from "../action_creators/actions"

export const postReducer = (state: Array<any> = [], action: Action) => {
    switch(action.type){
        case ActionType.GET_ALL:
            return action.payload
        case ActionType.CREATE:
            return [...state,action.payload]
        case ActionType.UPDATE:
            const updated = state.map((p) => {
                if (p._id === action.payload[0]){
                    console.log('change', action.payload[1], p)
                    return action.payload[1]
                } 
                return p
            })
            console.log('updated',updated)
            return updated
        case ActionType.DELETE:
            return state.filter((p) => p._id !== action.payload)
        default:
            return state
        }
}