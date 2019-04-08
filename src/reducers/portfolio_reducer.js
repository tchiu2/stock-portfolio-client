import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PORTFOLIO:
      return { ...state, ...action.portfolio };
    default:
      return state;
  }
};
