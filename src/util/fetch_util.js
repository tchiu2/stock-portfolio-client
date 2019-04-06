export const fetchSession = (url, method, body = {}) => 
  fetch(`http://localhost:3001/${url}`, {
    method: method,
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ user: body }),
  }).then(res => {
    if (!res.ok) { throw res }
    return res.json();
  });

export const fetchStockData = stocks => {
  const symbols = stocks.join(","); 
  return fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbols}&types=quote`,{
    method: "GET"
  }).then(res => {
    if (!res.ok) { throw res }
    return res.json();
  });
}
