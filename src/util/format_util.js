export const formatCurrency = num => 
  num.toLocaleString(undefined, { style: "currency", currency: "USD" });
