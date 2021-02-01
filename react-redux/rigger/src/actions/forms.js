export const updatePartForm = (name, value) => {
    const partForm = { name, value } 
    return {
        type: "UPDATE_PART_FORM",
        partForm 
    }
}

export const resetPartForm = () => {
    return {
        type: "RESET_PART_FORM"
    }
}

export const deletePart = () => {
    return {
        type: "DELETE_PART"
    }
}

export const updateBuild = (name, value) => {
    const buildForm = { name, value } 
    return {
        type: "UPDATE_BUILD",
        buildForm 
    }
}

export const resetBuildForm = () => {
    return {
        type: "RESET_BUILD"
    }
}