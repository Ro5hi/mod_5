import React from 'react'
import { connect } from 'react-redux'

const BuildContainer = ({ builds }) => {
    <ul className="build-list">
        {builds && builds.length
        ? builds.map((build, index) => {
            return <Build key={`build-${build.id}`} build={build} />
        }) : "No rig has been made"
    }
    </ul>
}
