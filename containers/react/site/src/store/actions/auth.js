import * as actionTypes from '../actionTypes';
// import axios from 'axios';
// import { API_TOKEN_EXPIRATION_TIME } from '../../common/constants';

/*
 * action creators
 */ 

export const createPlainNotification = (actionType) => ({
  type: actionType
})

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = (actionType="NOTHING") => {
  // console.log("Successfully finished " + actionType);
  return { type: actionTypes.AUTH_SUCCESS, action: actionType }
}

export const authFail = (err, actionType="NOTHING") => {
  // console.log(err);
  return { type: actionTypes.AUTH_FAIL, action: actionType, err: err }
}

export const authLogin = () => ({ type: actionTypes.AUTH_LOGIN });

export const authLogout = () => ({ type: actionTypes.AUTH_LOGOUT });

export const authSetUserName = (username) => {
  return {
  type: actionTypes.AUTH_SET_USERNAME, username: username
  }
}

export const authSetUserPass = (userPass) => ({
  type: actionTypes.AUTH_SET_USERPASS, userPass: userPass
})

export const authSetUserToken = (userToken) => ({
  type: actionTypes.AUTH_SET_USERTOKEN, userToken: userToken
})

export const authSetTokenExpirationDate = (expirationDate) => ({
  type: actionTypes.AUTH_SET_TOKEN_EXPORATIONDATE, expirationDate: expirationDate
})

export const authSetTokenValidity = (tokenValidity) => ({
  type: actionTypes.AUTH_SET_TOKEN_VALIDITY, tokenValidity: tokenValidity
})

export const authTokenObtain = (username, userPass) => ({
  type: actionTypes.AUTH_TOKEN_OBTAIN,
  username: username, 
  userPass: userPass
})

export const authTimeout = (timeout) => ({
  type: actionTypes.AUTH_TIMEOUT,
  timeout: timeout
})

export const authCheckTokenExpiration = (expirationDate, token) => ({
  type: actionTypes.AUTH_TOKEN_CHECK_EXPIRATION,
  expirationDate: expirationDate,
  token: token
})

export const authTokenVerify = (token) => ({
  type: actionTypes.AUTH_TOKEN_VERIFY,
  token: token
})

export const authTokenRefresh = (oldToken) => ({
  type: actionTypes.AUTH_TOKEN_REFRESH,
  oldToken: oldToken
})