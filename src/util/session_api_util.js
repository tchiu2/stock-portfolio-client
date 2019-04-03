export const login = user => (
  fetch('http://localhost:3001/login', {
    method: "POST",
    body: JSON.stringify({ user }),
  })
);

export const signup = user => (
  fetch('http://localhost:3001/signup', {
    method: "POST",
    body: JSON.stringify({ user }),
  })
);

export const logout = user => (
  fetch('http://localhost:3001/logout', {
    method: "DELETE",
  })
);
