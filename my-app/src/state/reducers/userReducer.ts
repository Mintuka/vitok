import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/user_interface/interfaces"

type UserType = {
    email: string,
    errorMessage: string,
    userId: string
}

export const userReducer = (state: UserType = { email:'', errorMessage:'', userId:'' }, action: Action) => {
    
    switch(action.type){
        case ActionType.CREATE_USER:
            return {
                ...state,
                email: action.payload.email,
                userId: action.payload.decoded._id,
                errorMessage: ''
            }
        case ActionType.USER_ERROR:
            return {
                ...state,
                errorMessage: action.payload.message
            }
        case ActionType.LOGIN_USER:
            return {
                ...state,
                email: action.payload.email,
                userId: action.payload.decoded._id,
                errorMessage: ''
            }
        case ActionType.LOG_OUT:
            return {
                ...state,
                email: action.payload,
                userId: action.payload
            }
        default:
            return state
        }
}