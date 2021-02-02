import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPart } from './actions/partsList'

    class AddParts extends Component { 
        constructor() {
            super() 
            this.state = {
                name: "",
                component: "",
                price: ""
            }
        }

        handleChange = e => {
            const { name, value } = e.target
            this.setState({ [name]: value})
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.addPart(this.state)
            this.setState({
                name: "",
                component: "",
                price: ""
            })
        }

        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="partName"
                            onChange={this.handleChange}
                            value={this.state.name} />
                        <input 
                            type="text"
                            className="partComponent"
                            onChange={this.handleChange}
                            value={this.state.component} />
                        <input
                            type="text"
                            className="partPrice"
                            onChange={this.handleChange}
                            value={this.state.price} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            )
        }
    }

export default connect(null, { addPart })(AddParts)