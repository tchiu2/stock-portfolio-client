import { fetchSession } from './fetch_util';

export const login = user => fetchSession('login', 'POST', user);

export const signup = user => fetchSession('signup', 'POST', user);

export const logout = () => fetchSession('logout', 'DELETE');
