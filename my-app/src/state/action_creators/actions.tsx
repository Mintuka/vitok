import { Dispatch } from "react"
import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"
import { fetchPosts, createPosts, createUsers, logInUsers, deletePost, updatePost, likePost, createComment, getComments } from "../../api/api"
import jwt_decode from 'jwt-decode'

export const getAllPosts = () => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await fetchPosts()
        if (status === 200){
            dispatch({
                type: ActionType.GET_ALL,
                payload: data
            })
        }else{
            dispatch({
                type: ActionType.ERROR,
                payload: data
            })
        }
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
        try{
            const { data, status } = await updatePost(_id, post)
            if (status === 200){
                dispatch({
                    type: ActionType.UPDATE,
                    payload:{...post,_id}
                })
            }else{
                dispatch({
                    type: ActionType.ERROR,
                    payload:data
                })
            }

        }catch(e){
            
        }

    }
}

export const createUser = (newUser: object) => {
     return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await createUsers(newUser)
        if (status === 200)
        {
            localStorage.setItem('user', JSON.stringify({email: data.email, token: data.token}))
            const decoded = jwt_decode(data.token)
            dispatch({
                type: ActionType.CREATE_USER,
                payload: { ...data, decoded }
            })
        }
        else{
            dispatch({
                type: ActionType.ERROR,
                payload: data
            })
        }
    }
}

export const logInUser = (user: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data, status} = await logInUsers(user)
        console.log('what the hell', data, status)
        if (status === 200)
        {
            localStorage.setItem('user', JSON.stringify({email: data.email, token: data.token}))
            const decoded = jwt_decode(data.token)
            dispatch({
                type: ActionType.LOGIN_USER,
                payload: { ...data, decoded }
            })
            window.location.href = '/'
        }
        else{
            dispatch({
                type: ActionType.ERROR,
                payload: data
            })
        }
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
        const { data, status} = await likePost(postId)
        if (status === 200){
            dispatch({
                type: ActionType.LIKE,
                payload: [data, postId]
            })
        }else{
            dispatch({
                type: ActionType.LIKE_ERROR,
                payload: [data, postId]
            })
        }
    }
}

export const createComments = (comment:any) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await createComment(comment)
        console.log('comment-d',status, data)
        if (status === 201){
            dispatch({
                type: ActionType.CREATE_COMMENT,
                payload: data
            })
        }else{
            dispatch({
                type: ActionType.ERROR,
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
                type: ActionType.ERROR,
                payload: data
            })
        }

    }
}