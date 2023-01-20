import { Dispatch } from "react"
import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"
import { fetchPosts,createPosts } from "../../api/api"
import { AxiosHeaders } from "axios"

export const getAll = () => {
    return async(dispatch: Dispatch<Action>) => {
        const {data} = await fetchPosts()
        dispatch({
            type: ActionType.GET_ALL,
            payload: data
        })
    }
}

export const create = (newPost: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data} = await createPosts(newPost)
        console.log('create', data)
        dispatch({
            type: ActionType.CREATE,
            payload: data
        })
    }
}