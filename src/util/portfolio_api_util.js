import { getResource } from './fetch_util';

export const fetchPortfolio = userId => getResource('users', userId, 'portfolio');
