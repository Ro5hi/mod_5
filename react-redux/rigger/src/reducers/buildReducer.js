const initialState = {
    parts: "",
    description: "",
}

    const buildForm = (state=initialState, action) => {
        switch (action.type) {
            case "CREATED_BUILD":
                const input = {
                    ...state,
                    [action.buildData.name]: action.buildData.value 
                }
                return input 
        case "RESET_BUILD_FORM":
            return initialState
        default: 
            return state; 
        }
    }

export default buildReducer 