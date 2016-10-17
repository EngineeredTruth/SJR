import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

export default class Content extends Component {
  constructor(props){
    super(props)
  }

  render = () => {

    return(
      <div>
        <h1 className={css(styles.test)}>Send content to SocialJusticeRetards@gmail.com</h1>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    marginTop: '25px'
  }
});
