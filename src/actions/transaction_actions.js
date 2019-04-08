import * as APIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});

export const fetchTransactions = userId => dispatch => (
  APIUtil.fetchTransactions(userId)
    .then(({ transactions })=> dispatch(receiveTransactions(transactions)))
);
