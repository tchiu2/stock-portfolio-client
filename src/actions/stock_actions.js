import { fetchStockData } from '../util/fetch_util';

export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

const receiveStocks = stocks => ({
  type: RECEIVE_STOCKS,
  stocks,
});

export const fetchStocks = list => dispatch => (
  fetchStockData(list)
    .then(stocks => dispatch(receiveStocks(stocks)))
    .catch(err => console.log(err))
);
