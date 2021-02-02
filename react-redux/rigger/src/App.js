import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Nav from './components/presentational/Nav'
import CreatedBuilds from './components/presentational/CreatedBuilds'
import CreateABuild from './components/forms/CreateABuild'
import AddParts from './components/forms/AddParts'

  class App extends Component {

    render() {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path='/builds' component={CreatedBuilds}/>
            <Route exact path='/newbuild' component={CreateABuild}/>
            <Route exact path='/addpart' component={AddParts}/>
          </Switch>
        </div>
      )
    }
  }

  export default connect(null)(App)