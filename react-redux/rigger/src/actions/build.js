import { resetBuildForm } from './forms.js'

export const allbuilds = builds => {
    return {
        type: "ALL_BUILDS",
        builds
    }
}

export const addbuild = build => {
    return {
        type: "BUILD_ADDED",
        build
    }
}

export const getbuilds = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/builds", {
            credentials: "include",
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(builds => {
            if (builds.error) {
                alert(builds.error)
            } else {
                console.log("builds:", builds)
                dispatch(builds.data)
            }
        })
        .catch(console.log)
    }
}

export const addBuild = (build, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/newbuild", {
            credentials: "include",
            method: "POST",
            body: JSON.stringify(build),
            headers: { "Content-Type": "application/json" },
        })
        .then(response => response.json())
        .then(build => {
            if (build.error) {
                console.log("Trouble adding", build)
                alert(build.error)
            } else {
                console.log("Added build:", build)
                dispatch(addbuild(build.data))
                dispatch(resetbuildForm())
                history.push(`/builds`)
            }
        })
        .catch(console.log)
    }
}