import { Dispatch } from "react"
import { ActionType } from "../../action_types/types"
import { Action } from "../../actions_interface/post_interface/interfaces"
import { fetchPosts, createPosts, deletePost, updatePosts, likePost } from "../../../api/api"

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
                type: ActionType.POST_ERROR,
                payload: data
            })
        }
    }
}

export const createPost = (newPost: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await createPosts(newPost)
        if (status === 201){
            dispatch({
                type: ActionType.CREATE_POST,
                payload: data
            })
        }else{
            dispatch({
                type: ActionType.POST_ERROR,
                payload: data
            })
        }

    }
}

export const updatePost = (_id: String, post: Object) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            const { data, status } = await updatePosts(_id, post)
            if (status === 200){
                dispatch({
                    type: ActionType.UPDATE_POST,
                    payload:{...post,_id}
                })
            }else{
                dispatch({
                    type: ActionType.POST_ERROR,
                    payload:data
                })
            }

        }catch(e){
            
        }

    }
}

export const deletePosts = (postId: String) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status } = await deletePost(postId)
        if (status == 200){
            dispatch({
                type: ActionType.DELETE_POST,
                payload: postId
            })
        }else{
            dispatch({
                type: ActionType.POST_ERROR,
                payload: postId
            })
        }

    }
}

export const likePosts = (postId: String) => {
    return async(dispatch: Dispatch<Action>) => {
        const { data, status} = await likePost(postId)
        if (status === 200){
            dispatch({
                type: ActionType.LIKE_POST,
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