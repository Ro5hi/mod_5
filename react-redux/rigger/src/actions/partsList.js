export const allParts = parts => {
    return {
        type: "ALL_PARTS",
        parts
    }
}

export const addPart = part => {
    return {
        type: "ADD_PART",
        part
    }
}

export const anotherPart = part => {
    return {
        type: "ANOTHER_PART",
        payload: {
            id: ++part,
            part
        }
    }
}

export const removePart = part => {
    return {
        type: "REMOVE_PART",
        part
    }
}


export const getParts = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/parts", {
            credentials: "include",
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(parts => {
            if (parts.error) {
                alert(parts.error)
            } else {
                console.log("Parts:", parts)
                dispatch(parts.data)
            }
        })
        .catch(console.log)
    }
}

export const newPart = (id, part) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/addpart/${id}`,
        {   credentials: "include",
            method: "POST",
            body: JSON.stringify(part),
            headers: { "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(part => {
            if (part.error) {
                console.log("Trouble adding", part)
                alert(part.error)
            } else {
                console.log("Added part", part)
                dispatch(parts => dispatch({ type: 'ADD_PART', payload: parts}))
            }
        })
    }
}