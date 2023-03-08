import { ActionType } from '../../action_types/types'

interface CreateComment{
    type: ActionType.CREATE_COMMENT,
    payload: any
}

interface GetComment{
    type: ActionType.GET_COMMENT,
    payload: Array<any>
}

interface UpdateComment {
    type: ActionType.UPDATE_COMMENT,
    payload: any
}

interface DeleteComment {
    type: ActionType.DELETE_COMMENT,
    payload: string
}

interface CommentError {
    type: ActionType.COMMENT_ERROR,
    payload: any
}

export type Action = CreateComment | GetComment | UpdateComment | DeleteComment | CommentError