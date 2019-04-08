import { 
  postSession, 
  deleteSession,
  getResource } from './fetch_util';

export const login = user => postSession('login', user);

export const signup = user => postSession('signup', user);

export const logout = () => deleteSession();

export const fetchUser = userId => getResource('users', userId);
