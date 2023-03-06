import {ActionType} from '../action_types/types'

interface GetAll{
    type: ActionType.GET_ALL,
    payload: Array<any>
}

interface Create{
    type: ActionType.CREATE,
    payload: Array<any>
}

interface CreateComment{
    type: ActionType.CREATE_COMMENT,
    payload: Array<any>
}

interface GetComment{
    type: ActionType.GET_COMMENT,
    payload: Array<any>
}

interface Update{
    type: ActionType.UPDATE,
    payload: Array<any>
}

interface CreateUser{
    type: ActionType.CREATE_USER,
    payload: any
}

interface LogInUser{
    type: ActionType.LOGIN_USER
    payload: any
}

interface DELETE {
    type: ActionType.DELETE
    payload: String
}

interface ERROR {
    type: ActionType.ERROR
    payload: any
}

interface LOG_OUT{
    type: ActionType.LOG_OUT,
    payload: String
}

export type Action = GetAll | Create | CreateUser | LogInUser | Update | CreateComment | GetComment | DELETE | ERROR | LOG_OUT