import React, { Component } from 'react'
import AddParts from './AddParts'
import { connect } from 'react-redux'
import { addBuild } from '../actions/build'
import { updateBuildForm } from '../actions/forms'


    class CreateABuild extends Component { 
        constructor() {
            super() 
            this.state = {
                name: "",
                description: ""
            }
        }

        handleName = e => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }

        handleDescription = e => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.addBuild(this.state)
            this.setState({
                name: this.state.name,
                description: this.state.description
            })
        }

        render(){
            return (
                <div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input 
                            type="text"
                            name="name"
                            className="buildName"
                            placeholder="Name your build"
                            onChange={this.handleName}
                            value={this.state.name} />
                        <input 
                            type="text"
                            name="description"
                            className="buildDescription"
                            placeholder="About your build"
                            onChange={this.handleDescription}
                            value={this.state.description} />
                            <br /><br />
                            <AddParts />
                            <div>
                                <span>
                                    <input type="submit" value="Share Build" />
                                </span>
                            </div>
                    </form>
                </div>
            )
        }
    }

export default connect(null, { addBuild, updateBuildForm })(CreateABuild)