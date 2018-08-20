import * as actionTypes from '../actionTypes';
import { updateObject } from '../../common/utility';
// import * as constants from '../../common/constants';

const initialState = {
  username: '',
  userPass: '',
  userToken: '',
  expirationDate: null,
  tokenValidity: false,
};

const authSetUserName = (state, action) => updateObject(state, {
  username: action.username,
});

const authSetUserPass = (state, action) => updateObject(state, {
  userPass: action.userPass,
});

const authSetUserToken = (state, action) => updateObject(state, {
  userToken: action.userToken,
});

const authSetTokenExpirationDate = (state, action) => updateObject(state, {
  expirationDate: action.expirationDate,
});

const authSetTokenValidity = (state, action) => updateObject(state, {
  tokenValidity: action.tokenValidity,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SET_USERNAME: return authSetUserName(state, action);
    case actionTypes.AUTH_SET_USERPASS: return authSetUserPass(state, action);
    case actionTypes.AUTH_SET_USERTOKEN: return authSetUserToken(state, action);
    case actionTypes.AUTH_SET_TOKEN_EXPORATIONDATE: return authSetTokenExpirationDate(state, action);
    case actionTypes.AUTH_SET_TOKEN_VALIDITY: return authSetTokenValidity(state, action);
    default: return state;
  }
};

export default reducer;
