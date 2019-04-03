export const login = user => (
  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user }),
  }).then(res => res.json())
);

export const signup = user => (
  fetch('http://localhost:3001/signup', {
    method: "POST",
    body: JSON.stringify({ user }),
  }).then(res => res.json())
);

export const logout = user => (
  fetch('http://localhost:3001/logout', {
    method: "DELETE",
  }).then(res => res.json())
);
