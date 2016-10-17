import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import SJR from '../content/SJR.js'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Fatlogic from '../content/Fatlogic.js'
import Navbar from '../navbar/Navbar.js'
import Notfound from '../content/Notfound.js'
import SendContent from '../content/SendContent.js'

export default class Content extends Component {
  constructor(props){
    super(props)
  }

  render = () => {

    return(
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={Container} >
            <IndexRoute component={SJR} />
            <Route path='/fatlogic' component={Fatlogic} />
            <Route path='/sendcontent' component={SendContent} />
            <Route path='*' component={Notfound} />
          </Route>
        </Router>
      </div>
    )
  }
}

const Container = (props) => (<div>
  <Navbar />
  {props.children}
</div>)
