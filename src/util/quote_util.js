export const normalizeStockData = stocks =>
  Object.values(stocks).reduce((state, stock) => ({
    ...state,
    [stock.quote.symbol]: stock.quote,
  }), {});
