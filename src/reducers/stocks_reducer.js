import { RECEIVE_STOCKS } from '../actions/stock_actions';
import { normalizeStockData } from '../util/quote_util';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCKS:
      return { ...normalizeStockData(action.stocks) };
    default:
      return state;
  }
};
