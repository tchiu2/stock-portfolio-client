import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  errors,
  type: RECEIVE_SESSION_ERRORS,
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(err => err.text().then(message => dispatch(receiveErrors(message))))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(err => err.text().then(message => dispatch(receiveErrors(message))))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
