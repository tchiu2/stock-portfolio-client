import { getResource } from './fetch_util';

export const fetchTransactions = userId => getResource('users', userId, 'transactions');
