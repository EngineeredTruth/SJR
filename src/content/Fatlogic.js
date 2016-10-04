import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'

export default class Fatlogic extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: null
    }

    axios.get('https://www.reddit.com/r/fatlogic/top.json?sort=top')
    .then((response)=>{

      this.setState({
        data: response.data.data.children
      }, ()=>{
        console.log('data: ', this.state.data)
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render = () => {
    return(
      <div>
        <div className={css(styles.container)}>
          {this.state.data !== null && this.state.data.map((currentVal,i)=>{
            return(
              <div className={css(styles.card)} key={i}>
                <h1 className={css(styles.title)}>{currentVal.data.title}</h1>
                <a href={`http://www.reddit.com${currentVal.data.permalink}`}><img src={currentVal.data.thumbnail}/></a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto, sans-serif',
        marginBottom: 10
    },
    card: {
      boxShadow: '0 0 2px grey',
      padding: '10px 20px 10px 20px',
      margin: '0 0 20px 0',
      background: 'white'
    },
    container: {
      background: '#eee',
      padding: '20px 50px 20px 50px',
    }
});
