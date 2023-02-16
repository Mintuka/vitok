import { Dispatch } from "react"
import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"
import { fetchPosts, createPosts, createUsers, logInUsers, deletePost, updatePost, likePost, createComment, getComments } from "../../api/api"

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
        dispatch({
            type: ActionType.CREATE,
            payload: data
        })
    }
}

export const update = (_id: String, post: Object) => {
    return async(dispatch: Dispatch<Action>) => {
        const data = await updatePost(_id, post)
        console.log('update-action',data)
        dispatch({
            type: ActionType.UPDATE,
            payload: [data]
        })
    }
}

export const createUser = (newUser: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data} = await createUsers(newUser)
        dispatch({
            type: ActionType.CREATE_USER,
            payload: data
        })
    }
}

export const logInUser = (user: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data} = await logInUsers(user)
        dispatch({
            type: ActionType.LOGIN_USER,
            payload: data
        })
    }
}

export const deletePosts = (postId: String) => {
    return async() => {
        let data: any = await deletePost(postId)
        console.log('data -> ',data)
        if (data.message){
            data = data.message
        }
    }
}

export const likePosts = (postId: String) => {
    return async(dispatch: Dispatch<Action>) => {
        await likePost(postId)
        const { data } = await fetchPosts()
        dispatch({
            type: ActionType.GET_ALL,
            payload: data
        })
    }
}

export const createComments = (comment:any) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data } = await createComment(comment)
        dispatch({
            type: ActionType.CREATE_COMMENT,
            payload: data
        })
    }
}

export const getAllComments = () => {
    return async(dispatch: Dispatch<Action>) => {
        const { data } = await getComments()
        dispatch({
            type: ActionType.GET_COMMENT,
            payload: data
        })
    }
}