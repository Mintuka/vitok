import {ActionType} from '../action_types/types'

interface GetAll{
    type: ActionType.GET_ALL,
    payload: Array<any>
}

interface Create{
    type: ActionType.CREATE,
    payload: Array<any>
}

export type Action = GetAll | Create