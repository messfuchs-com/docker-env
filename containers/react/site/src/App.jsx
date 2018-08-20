import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './store/actions';
import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  username: state.auth.username,
  userpass: state.auth.userPass,
  usertoken: state.auth.userToken,
  tokenExpirationDate: state.auth.expirationDate,
});

const mapDispatchToProps = dispatch => ({
  onTokenObtain: (username, password) => dispatch(actions.authTokenObtain(username, password)),
  // onTokenRefresh: (token) => dispatch(actions.authTokenRefresh(token)),
  onUpdateUsername: username => dispatch(actions.authSetUserName(username)),
  onUpdateUserPassword: userPass => dispatch(actions.authSetUserPass(userPass)),
});

class App extends Component {
  componentDidMount() {
    const username = 'admin';
    const userpass = 'admin';
    this.props.onUpdateUsername(username);
    this.props.onUpdateUserPassword(userpass);
    this.props.onTokenObtain(username, userpass);
  }

  render() {
    const { username } = this.props;
    const { userpass } = this.props;
    const { usertoken } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {' '}
To get started, edit
          {' '}
          {' '}
          <code>src/App.js</code>
          {' '}
          {' '}
          {' '}
and save to reload.
          {' '}
        </p>
        <p>
          {' '}
User:
          {username}
          {' '}

        </p>
        <p>
          {' '}
Password:
          {userpass}
          {' '}

        </p>
        <p>
          {' '}
Token:
          {usertoken}
          {' '}

        </p>
      </div>
    );
  }
}

App.propTypes = {
  username: PropTypes.string,
  userpass: PropTypes.string,
  usertoken: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
