
import './App.css';

import React, { Component } from 'react'
import Navebar from './components/Navebar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
     <Navebar/>
     <News/>
      </div>
    )
  }
}
