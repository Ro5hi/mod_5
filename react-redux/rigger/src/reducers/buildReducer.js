const initialState = {
    name: "",
    description: ""
    // parts: ""
}

    export const buildReducer = (state=initialState, action) => {
        switch (action.type) {
            case "BUILD_FORM":
                return action.payload 
        case "RESET_BUILD":
            return initialState
        default: 
            return state; 
        }
    }