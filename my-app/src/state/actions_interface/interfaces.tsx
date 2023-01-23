import {ActionType} from '../action_types/types'

interface GetAll{
    type: ActionType.GET_ALL,
    payload: Array<any>
}

interface Create{
    type: ActionType.CREATE,
    payload: Array<any>
}

interface CreateUser{
    type: ActionType.CREATE_USER,
    payload: Array<any>
}

interface LogInUser{
    type: ActionType.LOGIN_USER
    payload: Array<any>
}

export type Action = GetAll | Create | CreateUser | LogInUser