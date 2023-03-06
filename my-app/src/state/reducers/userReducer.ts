import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const userReducer = (state: Array<any> = [], action: Action) => {
    const st = {
        email:'',
        errorMessage: ''
    }
    switch(action.type){
        case ActionType.CREATE_USER:
            return {
                email: action.payload.email,
                errorMessage: ''
            }
        case ActionType.ERROR:
            return {
                ...st,
                errorMessage: action.payload.message
            }
        case ActionType.LOGIN_USER:
            return {
                email: action.payload.email,
                errorMessage: ''
            }
        case ActionType.LOG_OUT:
            return {
                ...st,
                email: ''
            }
        default:
            return state
        }
}