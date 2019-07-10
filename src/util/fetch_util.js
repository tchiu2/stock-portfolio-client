const baseURL = process.env.REACT_APP_SERVER_URL;

const responseHandler = res => {
  if (!res.ok) return res.json().then(err => { throw err });
  const jwt = res.headers.get('Authorization');
  jwt && sessionStorage.setItem('jwt', jwt);
  return res.json();
};

const setHeaders = withAuth => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  withAuth && sessionStorage.jwt && headers.append("Authorization", sessionStorage.jwt);
  return headers;
};

export const postSession = (url, body = {}) =>
  fetch(`${baseURL}/${url}`, {
    method: "POST",
    headers: setHeaders(false),
    body: JSON.stringify({ user: body }),
  }).then(responseHandler);

export const deleteSession = () => {
  return fetch(`${baseURL}/logout`, {
    method: "DELETE",
    headers: setHeaders(true),
  }).then(responseHandler)
    .then(() => sessionStorage.removeItem('jwt'));
};

export const getResource = (resource, id, nestedResource = "") =>
  fetch(`${baseURL}/${resource}/${id}/${nestedResource}`, {
    method: "GET",
    headers: setHeaders(true),
  }).then(responseHandler);

export const getResources = (resource, query) =>
  fetch(`${baseURL}/${resource}?${query}`, {
    method: "GET",
    headers: setHeaders(true),
  }).then(responseHandler);

export const postTransaction = (body = {}) =>
  fetch(`${baseURL}/transactions`, {
    method: "POST",
    headers: setHeaders(true),
    body: JSON.stringify({ transaction: body }),
  }).then(responseHandler);
