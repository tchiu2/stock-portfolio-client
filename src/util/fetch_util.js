export const fetchSession = (url, method, body = {}) => 
  fetch(`http://localhost:3001/${url}`, {
    method: method,
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user: body }),
  }).then(res => {
    if (!res.ok) { throw res }
    return res.json();
  });
