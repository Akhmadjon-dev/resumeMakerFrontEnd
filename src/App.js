import React, { Component } from 'react'
import Header from './containers/Header/index'
import Resumes from './containers/Resumes'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Resumes />
      </div>
    )
  }
}

