import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from './store/actions';

const mapStateToProps = (state) => ({
  username: state.auth.username,
  userpass: state.auth.userPass,
  usertoken: state.auth.userToken,
  tokenExpirationDate: state.auth.expirationDate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTokenObtain: (username, password) => dispatch(actions.authTokenObtain(username, password)),
  // onTokenRefresh: (token) => dispatch(actions.authTokenRefresh(token)),
  onUpdateUsername: (username) => dispatch(actions.authSetUserName(username)),
  onUpdateUserPassword: (userPass) => dispatch(actions.authSetUserPass(userPass)),
})

class App extends Component {

  componentDidMount() {
    const username = 'admin';
    const userpass = 'admin';
    this.props.onUpdateUsername(username);
    this.props.onUpdateUserPassword(userpass);
    this.props.onTokenObtain(username, userpass);
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
        <p>User: {this.props.username}</p>
        <p>Password: {this.props.userpass}</p>
        <p>Token: {this.props.usertoken}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( App );
