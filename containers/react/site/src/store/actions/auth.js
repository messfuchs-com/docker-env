import * as actionTypes from '../actionTypes';

export const createPlainNotification = actionType => ({
  type: actionType,
});

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = (actionType = 'NOTHING') => ({
  type: actionTypes.AUTH_SUCCESS,
  action: actionType,
});

export const authFail = (err, actionType = 'NOTHING') => ({
  type: actionTypes.AUTH_FAIL,
  action: actionType,
  err,
});

export const authLogin = (username, password) => ({
  type: actionTypes.AUTH_LOGIN,
  username,
  userPass: password
});

export const authLogout = () => ({ type: actionTypes.AUTH_LOGOUT });

export const authSetUserName = username => ({
  type: actionTypes.AUTH_SET_USERNAME, 
  username,
});

export const authSetUserPass = userPass => ({
  type: actionTypes.AUTH_SET_USERPASS, 
  userPass
});

export const authSetUserToken = userToken => ({
  type: actionTypes.AUTH_SET_USERTOKEN, 
  userToken
});

export const authSetTokenExpirationDate = expirationDate => ({
  type: actionTypes.AUTH_SET_TOKEN_EXPORATIONDATE,
  expirationDate,
});

export const authSetTokenValidity = tokenValidity => ({
  type: actionTypes.AUTH_SET_TOKEN_VALIDITY, 
  tokenValidity,
});

export const authTokenObtain = (username, userPass) => ({
  type: actionTypes.AUTH_TOKEN_OBTAIN,
  username,
  userPass
});

export const authTimeout = timeout => ({
  type: actionTypes.AUTH_TIMEOUT,
  timeout,
});

export const authCheckTokenExpiration = (expirationDate, token) => ({
  type: actionTypes.AUTH_TOKEN_CHECK_EXPIRATION,
  expirationDate,
  token,
});

export const authTokenVerify = token => ({
  type: actionTypes.AUTH_TOKEN_VERIFY,
  token,
});

export const authTokenRefresh = oldToken => ({
  type: actionTypes.AUTH_TOKEN_REFRESH,
  oldToken,
});
