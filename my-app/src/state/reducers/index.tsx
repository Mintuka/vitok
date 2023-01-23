import { combineReducers } from "redux"
import {reducer} from './reducer'

export const reducers = combineReducers({
    post: reducer
})

export type RootState = ReturnType<typeof reducers>