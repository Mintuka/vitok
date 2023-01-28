import { combineReducers } from "redux"
import { postReducer } from './postReducer'
import { userReducer } from "./userReducer"

export const reducers = combineReducers({
    post: postReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof reducers>