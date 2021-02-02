import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPart } from '../actions/partsList'


    class CreateABuild extends Component { 
        constructor() {
            super() 
            this.state = {
                name: "",
                description: ""
            }
        }

        handleChange = e => {
            const { name, value } = e.target
            this.setState({ [name]: value})
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.addBuild(this.state)
            this.setState({
                name: "",
                description: ""
            })
        }

        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="buildName"
                            onChange={this.handleChange}
                            value={this.state.name} />
                        <input 
                            type="text"
                            className="description"
                            onChange={this.handleChange}
                            value={this.state.description} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            )
        }
    }

export default connect(null, { newPart })(CreateABuild)