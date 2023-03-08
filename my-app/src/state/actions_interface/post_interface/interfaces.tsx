import { ActionType } from '../../action_types/types'

interface GetAllPost{
    type: ActionType.GET_ALL,
    payload: Array<any>
}

interface CreatePost{
    type: ActionType.CREATE_POST,
    payload: Array<any>
}

interface UpdatePost{
    type: ActionType.UPDATE_POST,
    payload: any
}

interface DeletePost {
    type: ActionType.DELETE_POST
    payload: String
}

interface LikePost {
    type: ActionType.LIKE_POST,
    payload: any
}

interface LikeError {
    type: ActionType.LIKE_ERROR,
    payload: any
}

interface PostError {
    type: ActionType.POST_ERROR
    payload: any
}

export type Action = GetAllPost | CreatePost | UpdatePost | DeletePost | LikePost | PostError | LikeError