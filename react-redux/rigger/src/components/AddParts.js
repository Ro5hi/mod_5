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

        handleAddAPart = () => {
            this.props.addParts(this.state.input)
            this.setState({ input: "" })
        }

        handleName = e => {
            const { name, value } = e.target
            this.setState({ 
                [name]: value
            })
        }

        handleComponent = e => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }

        handlePrice = e => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.newPart(this.props.part.id, this.state)
            this.setState({
                name: this.state.name,
                component: this.state.component,
                price: this.state.price
            })
        }

        handleDelete = e => {
            e.preventDefault()
            this.props.actions.deletePart(this.props.part.id)
        }

        render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="name"
                            className="partName"
                            placeholder="Name"
                            onChange={this.handleName}
                            value={this.state.name} />
                        <input 
                            type="text"
                            name="component"
                            className="partComponent"
                            placeholder="Component"
                            onChange={this.handleComponent}
                            value={this.state.component} />
                        <input
                            type="text"
                            name="price"
                            className="partPrice"
                            placeholder="Price"
                            onChange={this.handlePrice}
                            value={this.state.price} />
                        <div>
                            {this.props.part}
                                <button onClick={() => 
                                this.props.delete(this.props.part)}>Remove Part</button>
                        </div>
                        <div>
                            <span>
                                <input type="submit" value="List Part" />
                            </span>
                        </div>
                        <br /> <br />
                        <span>
                            <button onClick={this.handleAddAPart}>
                                Add Another Part
                            </button>
                        </span>
                        
                    </form>
                </div>
            )
        }
    }

export default connect(null, { newPart, updatePartForm })(AddParts)