import {ActionType} from '../action_types/types'

interface GetAll{
    type: ActionType.GET_ALL,
    payload: object
}

export type Action = GetAll