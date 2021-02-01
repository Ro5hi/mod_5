const initialState = {
    name: "",
    price: "",
    component: ""
}

    export const partsReducer = (state=initialState, action) => {
        switch (action.type) {
            case "ADD_PART":
                const input = {
                    ...state,
                    [action.partData.name]: action.partData.value
                }
                return input 
            case "RESET_PART_FORM":
                return initialState
            default: 
                return state;
        }
    }