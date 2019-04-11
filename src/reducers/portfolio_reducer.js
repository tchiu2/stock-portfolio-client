import { combineReducers } from 'redux';
import { RECEIVE_PORTFOLIO, REQUEST_PORTFOLIO } from '../actions/portfolio_actions';

const positions = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return { ...state, ...action.portfolio };
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_PORTFOLIO:
      return true;
    case RECEIVE_PORTFOLIO:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  positions,
  loading,
});
