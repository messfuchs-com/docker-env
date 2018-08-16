import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import { API_BASE_URL, API_TOKEN_EXPIRATION_TIME } from '../../common/constants';

const authHeader = { headers: { 'Content-Type': 'application/json' } }

export function* authCheckTimeout(action) {
  yield delay(action.timeout * 1000);
  yield put( actions.authSetUserToken('') );
}

export function* authLogoutSaga(action) {
  yield put( actions.authSetUserToken(''));
  yield put( actions.authSetUserPass(''));
  yield put( actions.authSetUserName(''));
}

export function* authTokenObtainSaga(action) {
  // yield put(actions.authStart());
  const authUrl = API_BASE_URL + '/api-token-auth/';
  const authData = {
    username: action.username,
    password: action.userPass
  }
  try {

    const res = yield axios.post( authUrl, authData, authHeader );
    const newToken = res.data.token;
    const expirationDate = yield new Date(
      new Date().getTime() + API_TOKEN_EXPIRATION_TIME * 1000
    )
    yield put(actions.authSetUserToken(newToken));
    yield put(actions.authSetTokenExpirationDate(expirationDate));
    yield put(actions.authCheckTokenExpiration(expirationDate, newToken));
    yield put(actions.authSuccess(action.type));

  } catch (err) {
    yield put(actions.authFail(err, action.type))
  }
}

export function* authTokenVerifySaga(action) {
  yield put(action.authStart());
  const authUrl = API_BASE_URL + '/api-token-verify/';
  const authData = {
    token: action.token
  }
  try {
    const res = yield axios.put( authUrl, authData, authHeader );
    const tokenValidity = 'token' in res.data;
    yield put(actions.authSetTokenValidity(tokenValidity))
    yield put(actions.authSuccess(action.type));
  } catch (err) {
    yield put(actions.authFail(err, action.type));
  }
}

export function* authSetUserTokenSaga(action) {
  // yield put(actions.authSetUserToken(action.token));
  yield put(actions.authSetTokenValidity(true));
}

export function* authTokenRefreshSaga(action) {
  yield put(actions.authStart());
  const authUrl = API_BASE_URL + '/api-token-refresh/';
  const authData = {
    token: action.oldToken
  }
  try {

    const res = yield axios.post( authUrl, authData, authHeader );
    const newToken = res.data.token;
    const expirationDate = yield new Date(
      new Date().getTime() + API_TOKEN_EXPIRATION_TIME * 1000
    )
    yield put(actions.authSetUserToken(newToken));
    yield put(actions.authSetTokenExpirationDate(expirationDate, newToken));
    yield put(actions.authSuccess(action.type));
  } catch (err) {
    yield put(actions.authFail(err, action.type))
  }
}

export function* authSetTokenExpirationDateSaga(action) {
  try {
    yield put(actions.authSetTokenExpirationDate(action.expirationDate));
    yield put(actions.authSuccess(action.type))
  } catch (err) {
    yield put(actions.authFail, err, action.type);
  }
}

export function* authTokenCheckExpirationSaga(action) {
  const dateNow = new Date();
  const expirationDateSafe = new Date( action.expirationDate.getTime() - 10000 );
  const expirationDateReal = action.expirationDate;
  const expirationTime = (expirationDateReal.getTime() - dateNow.getTime())/1000;

  console.log("Date Now   : " + dateNow);
  console.log("ExpiresReal: " + expirationDateReal);
  console.log("ExpiresSafe: " + expirationDateSafe);

  if (dateNow >= expirationDateSafe && dateNow < expirationDateReal ) {
    yield put(actions.authTokenRefresh(action.token));
    yield put(actions.authTimeout(expirationTime));
  } 
}