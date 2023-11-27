export type ThemeT = 'dark' | 'red' | 'some'
const initState = {
    theme: 'some' as ThemeT
};
type InitStateT = typeof initState
export const themeReducer = (state: InitStateT = initState, action: ReturnType<typeof changeThemeC>): InitStateT => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.themeName
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (themeName: ThemeT) => ({
    type: "CHANGE_THEME",
    themeName
} as const); // fix any