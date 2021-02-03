const initialState = {
    name: "",
    price: "",
    component: ""
}

    export const partsReducer = (state=initialState, action) => {
        switch (action.type) {
            case "ADD_PART":
                return action.payload
            case "REMOVE_PART":
                return {parts: state.part.filter(part => part !== action.payload)}
            default:
                return state 
            case "RESET_PART_FORM":
                return state
        }
    }