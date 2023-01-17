import { ActionType } from "../action_types/types"
import { Action } from "../actions_interface/interfaces"

const initialState = [{}]

export const reducer = (state: Object[] = initialState, action: Action): Object[] => {
    switch(action.type){
        case ActionType.GET_ALL:
            return state
    }
}

