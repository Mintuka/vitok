import { combineReducers } from "redux"
import { postReducer } from './postReducer'
import { userReducer } from "./userReducer"
import { commentReducer } from "./commentReducer"

export const reducers = combineReducers({
    post: postReducer,
    user: userReducer,
    comment:commentReducer
})

export type RootState = ReturnType<typeof reducers>