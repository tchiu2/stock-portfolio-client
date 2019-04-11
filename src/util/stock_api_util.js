import { getResources } from './fetch_util';

export const fetchStocks = query => getResources("stocks", `filter=${query}`);
