import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render = () => {
    return(
      <div className={css(styles.navbar)}>
        <h1 className={css(styles.title)}>Social Justice Retards</h1>
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
      position: 'relative'
    },
    title: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'Roboto',
      position: 'absolute',
      top: '50%',
      transform: 'translate(0,-50%)',
      paddingLeft: '20px'
    }
});
