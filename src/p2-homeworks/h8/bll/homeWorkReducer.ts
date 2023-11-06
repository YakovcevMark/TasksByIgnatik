import {HW8UserType} from "../HW8";

type ActionTypes = {
    type: 'sort' | 'check',
    payload: string | number
}
export const homeWorkReducer = (state: HW8UserType[], action: ActionTypes): HW8UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
            return action.payload === 'up'
                ? [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
                : [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
        case 'check': {
            return state.filter(p => p.age === action.payload)
        }
        default:
            return state
    }
}