const initialState = {
    name: "",
    price: "",
    component: ""
}

    const part = (state=initialState, action) => {
        switch (action.type) {
            case "ADDED PARTS":
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

export default partsReducer