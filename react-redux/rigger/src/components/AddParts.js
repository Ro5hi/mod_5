import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPart } from '../actions/partsList'
import { updatePartForm } from '../actions/forms'

    class AddParts extends Component { 
        constructor() {
            super() 
            this.state = {
                name: "",
                component: "",
                price: ""
            }
        }

        handleName = e => {
            const { name, value } = e.target
            this.setState({ 
                name: e.target.value
            })
        }

        handleComponent = e => {
            const { name, value } = e.target
            this.setState({
                component: e.target.value
            })
        }

        handlePrice = e => {
            const { name, value } = e.target
            this.setState({
                price: e.target.value 
            })
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.newPart(this.state)
            this.setState({
                name: "",
                component: "",
                price: ""
            })
        }

        handleDelete() {
            this.props.actions.deletePart(this.props.part.id)
        }

        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="partName"
                            placeholder="Name"
                            onChange={this.handleName}
                            value={this.state.name} />
                        <input 
                            type="text"
                            className="partComponent"
                            placeholder="Component"
                            onChange={this.handleComponent}
                            value={this.state.component} />
                        <input
                            type="text"
                            className="partPrice"
                            placeholder="Price"
                            onChange={this.handlePrice}
                            value={this.state.price} />
                        <div>
                            <span>{this.props.text}
                                <button onClick={() => 
                                this.props.delete(this.props.text)}>Remove Part</button>
                            </span>
                        </div>
                        <div>
                            <span>
                                <input type="submit" value="Add Part" />
                            </span>
                        </div>
                    </form>
                </div>
            )
        }
    }

export default connect(null, { newPart, updatePartForm })(AddParts)