import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class SJR extends Component {
  constructor(props){
    super(props)
  }

  render = () => {

    var arrayImg = [
      './img/LLAG-1.png',
      './img/LLAG-2.png',
      './img/LLAG-3.png',
      './img/LLAG-4.png',
      './img/LLAG-5.png',
    ]

    return(
      <div className={css(styles.contentContainer)}>
        {arrayImg.map((currentVal, i) => {
          return <img key={i} src={currentVal}/>
        })}
      </div>
    )
  }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'red'
    },
    contentContainer: {
      textAlign: 'center'
    },

});
