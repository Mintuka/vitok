import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/post_interface/interfaces"
import { postProps } from "../../components/post/SinglePost"
import { TypesDetail } from "../../types/details"

type StateType = {
    posts: Array<TypesDetail>,
    isLoading: boolean  
}

export const postReducer = (state: StateType = {
    posts: [],
    isLoading: true
}, action: Action) => {

    switch(action.type){
        case ActionType.GET_ALL:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }

        case ActionType.CREATE_POST:
            return {
                ...state,
                posts:[...state.posts, action.payload],
                isLoading: false
            }

        case ActionType.UPDATE_POST:
            const updated = state.posts.map((post) => {
                if (post._id === action.payload[0]){
                    return action.payload[1]
                } 
                return post
            })
            return {
                ...state,
                posts: [...updated],
                isLoading: false
            }

        case ActionType.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post: postProps) => post._id !== action.payload),
                isLoading: false
            }

        case ActionType.LIKE_POST:
            return {
                ...state,
                posts: [...state.posts]
            }

        default:
            return state
        }
}