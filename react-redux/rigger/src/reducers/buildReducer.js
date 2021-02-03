const initialState = {
    name: "",
    description: ""
}

    export const buildReducer = (state=initialState, action) => {
        switch (action.type) {
            case "BUILD_FORM":
                return action.buildData
        case "RESET_BUILD":
            return initialState
        default: 
            return state; 
        }
    }