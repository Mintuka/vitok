import { Dispatch } from "react"
import { ActionType } from "../../action_types/types"
import { Action } from "../../actions_interface/comment_interface/interfaces"
import {  createComment, getComments, deleteComment, updateComment } from "../../../api/api"

export const createComments = (comment:any) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await createComment(comment)
        if (status === 201){
            dispatch({
                type: ActionType.CREATE_COMMENT,
                payload: data
            })
        }else{
            dispatch({
                type: ActionType.COMMENT_ERROR,
                payload: data
            })
        }
    }
}

export const getAllComments = () => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await getComments()
        if (status === 200){
            dispatch({
                type: ActionType.GET_COMMENT,
                payload: data
            })
        }else{
            dispatch({
                type: ActionType.COMMENT_ERROR,
                payload: data
            })
        }
    }
}

export const deleteComments = (commentId: string) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await deleteComment(commentId)
        if (status === 200){
            dispatch({
                type: ActionType.DELETE_COMMENT,
                payload: commentId
            })
        }else{
            dispatch({
                type: ActionType.COMMENT_ERROR,
                payload: data
            })
        }
    }
}

export const updateComments = (commentId: string, update: Object) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await updateComment(commentId, update)
        if (status === 200){
            dispatch({
                type: ActionType.UPDATE_COMMENT,
                payload: [commentId, data]
            })
        }else{
            dispatch({
                type: ActionType.COMMENT_ERROR,
                payload: data
            })
        }
    }
}