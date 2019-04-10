import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const appReducer = combineReducers({
  entities,
  session,
  errors,
});

export default (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined;
  }

  return appReducer(state, action);
};
