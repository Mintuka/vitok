import { Dispatch } from "react"
import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

export const getAll = (post: Array<Object>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_ALL,
            payload: post
        })
    }
}