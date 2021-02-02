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
            case "REMOVE_PART":
                return {parts: state.todos.filter(part => part !== action.payload)}
            default:
                return state 
            case "RESET_PART_FORM":
                return state
        }
    }