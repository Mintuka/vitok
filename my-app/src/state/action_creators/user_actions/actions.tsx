import { Dispatch } from "react"
import { ActionType } from "../../action_types/types"
import { Action } from "../../actions_interface/user_interface/interfaces"
import { createUsers, logInUsers, resetPassword } from "../../../api/api"
import jwt_decode from 'jwt-decode'

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
                type: ActionType.USER_ERROR,
                payload: data
            })
        }
    }
}

export const logInUser = (user: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data, status} = await logInUsers(user)
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
                type: ActionType.USER_ERROR,
                payload: data
            })
        }
    }
}

export const resetUserPassword = (user: object) => {
    return async(dispatch: Dispatch<Action>) => {
        const {data, status} = await resetPassword(user)
        console.log('status-respd',status)
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
                type: ActionType.USER_ERROR,
                payload: data
            })
        }
    }
}