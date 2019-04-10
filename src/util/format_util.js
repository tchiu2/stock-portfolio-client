export const formatCurrency = num => 
  num.toLocaleString(undefined, { style: "currency", currency: "USD" });

export const formatPriceChange = (change, changePct) =>
  `${change > 0 ? "+" : ""}${change} (${changePct ? (Math.abs(changePct) * 100).toFixed(2) : ""}%)`;

export const formatDate = dateStr => {
  const date = Date.parse(dateStr);
  if (isNaN(date)) return dateStr;
  const event = new Date(date);
  const formatted = event.toLocaleString('en-US', { timeZone: 'America/New_York' }).replace(',',' -');

  return `${formatted}`;
};
