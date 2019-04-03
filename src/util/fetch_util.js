export const handleResponse = res => {
  if (!res.ok) { throw res }
  return res.json();
};
