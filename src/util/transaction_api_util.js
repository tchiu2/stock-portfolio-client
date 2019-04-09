import { getResource, postTransaction } from './fetch_util';

export const fetchTransactions = userId => getResource('users', userId, 'transactions');

export const executeTransaction = transaction => postTransaction(transaction);
