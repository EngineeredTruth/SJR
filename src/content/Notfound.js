import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Notfound extends Component {
  constructor(props){
    super(props)
  }

  render = () => {
    return(
      <div>
        <h1>404 Not Found</h1>
      </div>
    )
  }
}
