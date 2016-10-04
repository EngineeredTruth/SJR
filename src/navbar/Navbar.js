import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';
import SJR from '../content/SJR.js'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render = () => {
    return(
      <div className={css(styles.navbar)}>
        <Link to='/'><h1 className={css(styles.title)}>Social Justice Retards</h1></Link>
        <Link to='/fatlogic'><h1 className={css(styles.title)}>Fat Logic</h1></Link>
      </div>
    )
  }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    },
    navbar: {
      border: '1px solid grey',
      backgroundColor: '#ff5050',
      height: '70px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'Roboto',
      display: 'inline-block',
      paddingLeft: '20px'
    }
});
