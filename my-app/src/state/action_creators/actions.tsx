import { Dispatch } from "react"
import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"
import { fetchPosts } from "../../api/api"

export const getAll = () => {
    return async(dispatch: Dispatch<Action>) => {
        const post: any = await fetchPosts()
        dispatch({
            type: ActionType.GET_ALL,
            payload: post
        })
    }
}