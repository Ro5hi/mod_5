// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import AddParts from './components/forms/AddParts'

// class PartContainer extends Component { 
    
//     renderParts = () => this.props.parts.map((part, id) =>
//     <AddParts delete={this.props.delete} key={id} text={part} />)

//     render() {
//         return(
//             <div>
//                 {this.renderParts()}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         parts: state.parts 
//     }
// }

// export default connect(null, mapStateToProps)(PartContainer)