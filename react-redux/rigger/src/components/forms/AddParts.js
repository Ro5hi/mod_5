// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { newPart } from '../actions/partsList'

//     class AddParts extends Component { 
//         constructor() {
//             super() 
//             this.state = {
//                 name: "",
//                 component: "",
//                 price: ""
//             }
//         }

//         handleChange = e => {
//             const { name, value } = e.target
//             this.setState({ [name]: value})
//         }

//         handleSubmit = e => {
//             e.preventDefault()
//             this.props.addPart(this.state)
//             this.setState({
//                 name: "",
//                 component: "",
//                 price: ""
//             })
//         }

//         handleDelete() {
//             this.props.actions.deletePart(this.props.part.id)
//         }

//         render(){
//             return (
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <input 
//                             type="text"
//                             className="partName"
//                             onChange={this.handleChange}
//                             value={this.state.name} />
//                         <input 
//                             type="text"
//                             className="partComponent"
//                             onChange={this.handleChange}
//                             value={this.state.component} />
//                         <input
//                             type="text"
//                             className="partPrice"
//                             onChange={this.handleChange}
//                             value={this.state.price} />
//                         <input type="submit" value="Add Part" />
//                         <div>
//                             <span>{props.text}</span>
//                             <button onClick={() => 
//                                 props.delete(props.text)}>Remove Part</button>
//                         </div>
//                     </form>
//                 </div>
//             )
//         }
//     }

// export default connect(null, { newPart })(AddParts)