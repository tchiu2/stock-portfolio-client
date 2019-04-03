import { handleResponse } from './fetch_util';

export const login = user => (
  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user }),
  }).then(handleResponse)
);

export const signup = user => (
  fetch('http://localhost:3001/signup', {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user }),
  }).then(handleResponse)
);

export const logout = user => (
  fetch('http://localhost:3001/logout', {
    method: "DELETE",
  }).then(handleResponse)
);
