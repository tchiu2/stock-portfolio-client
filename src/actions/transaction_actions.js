import * as APIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const CLEAR_TRANSACTION_ERRORS = "CLEAR_TRANSACTION_ERRORS";

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});

const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction,
});

const receiveErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors,
});

export const clearTransactionErrors = () => ({
  type: CLEAR_TRANSACTION_ERRORS,
})

export const fetchTransactions = userId => dispatch => (
  APIUtil.fetchTransactions(userId)
    .then(({ transactions }) => dispatch(receiveTransactions(transactions)))
);

export const postTransaction = transaction => dispatch => (
  APIUtil.executeTransaction(transaction)
    .then(({ transaction }) => dispatch(receiveTransaction(transaction)))
    .catch(({ errors }) => dispatch(receiveErrors(errors)))
);
