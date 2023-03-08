import { ActionType } from '../../action_types/types'

interface CreateUser {
    type: ActionType.CREATE_USER,
    payload: any
}

interface LogInUser {
    type: ActionType.LOGIN_USER
    payload: any
}

interface LogOutUser {
    type: ActionType.LOG_OUT,
    payload: any
}

interface UserError {
    type: ActionType.USER_ERROR
    payload: any
}


export type Action = CreateUser | LogInUser | LogOutUser | UserError