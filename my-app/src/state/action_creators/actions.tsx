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
        console.log('create',data)
        dispatch({
            type: ActionType.CREATE,
            payload: data
        })
    }
}

export const update = (_id: String, post: Object) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            await updatePost(_id, post)
            dispatch({
                type: ActionType.UPDATE,
                payload:[ _id, {...post,_id}]
            })
        }catch(e){
            
        }

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
        console.log('user info',user)
        const {data, status} = await logInUsers(user)
        dispatch({
            type: ActionType.LOGIN_USER,
            payload: [data, status]
        })
    }
}

export const deletePosts = (postId: String) => {
    return async(dispatch: Dispatch<Action>) => {
        await deletePost(postId)
        dispatch({
            type: ActionType.DELETE,
            payload: postId
        })
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