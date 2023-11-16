const initState = {
    isFetching: false
}
export type LoadingStateT = typeof initState
export const loadingReducer = (state: LoadingStateT = initState, action: ActionsType): LoadingStateT => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {
                ...state,
                isFetching: action.v
            }
        }
        default:
            return state
    }
}
type ActionsType = ReturnType<typeof loadingAC>
export const loadingAC = (v: boolean) => ({type: 'TOGGLE_LOADING', v} as const) // fix any