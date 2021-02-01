const initialState = {
    parts: "",
    description: "",
}

    export const buildReducer = (state=initialState, action) => {
        switch (action.type) {
            case "BUILD_ADDED":
                const input = {
                    ...state,
                    [action.buildData.name]: action.buildData.value 
                }
                return input 
        case "RESET_BUILD":
            return initialState
        default: 
            return state; 
        }
    }