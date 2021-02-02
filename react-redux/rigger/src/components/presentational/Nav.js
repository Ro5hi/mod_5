import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul><NavLink exact to="/addpart">Add Part</NavLink></ul>
                <ul><NavLink exact to="/builds">Builds List</NavLink></ul>
                <ul><NavLink exact to="/newbuild">New Build</NavLink></ul>
                // navigational bar links go here if needed
            </div>
        )
    }
}
