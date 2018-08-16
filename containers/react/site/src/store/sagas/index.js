import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import {
  authLogoutSaga,
  authTimeoutSaga,
  // authSetUserTokenSaga,
  authTokenObtainSaga,
  authTokenRefreshSaga,
  authTokenVerifySaga,
  authTokenCheckExpirationSaga,
} from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga);
  yield takeEvery(actionTypes.AUTH_TOKEN_OBTAIN, authTokenObtainSaga);
  yield takeEvery(actionTypes.AUTH_TOKEN_REFRESH, authTokenRefreshSaga);
  yield takeEvery(actionTypes.AUTH_TOKEN_VERIFY, authTokenVerifySaga);
  yield takeEvery(actionTypes.AUTH_TOKEN_CHECK_EXPIRATION, authTokenCheckExpirationSaga);
  yield takeEvery(actionTypes.AUTH_TIMEOUT, authTimeoutSaga);
  // yield takeEvery(actionTypes.AUTH_SET_USERTOKEN, authSetUserTokenSaga);
}