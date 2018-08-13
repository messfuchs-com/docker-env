import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    points: []
  }
  componentDidMount() {
    console.log("Do some axios")
    axios.get(
      "http://172.23.0.3:8000/api/points/",
      {
        headers: {
          'Authorization': 'Token f424cadb8fc8629d0e704f55a38144be3d66a234',
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      const pointArray = []
      res.data.forEach(element => {
        pointArray.push(
          { name: element.name, owner: element.owner}
        )
      });
      if (pointArray) {
        this.setState({points: pointArray})
      }
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>ABC</p>
      </div>
    );
  }
}

export default App;
