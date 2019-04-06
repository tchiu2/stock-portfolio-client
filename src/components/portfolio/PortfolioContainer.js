import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { fetchStocks } from '../../actions/stock_actions';

const calculateTotalPosition = (portfolio, stocks) => {
  return Object.keys(stocks)
    .map(s => stocks[s].latestPrice * portfolio[s])
    .reduce((total, pos) => total + pos, 0);
}

const msp = ({ entities: { portfolio, stocks } }) => ({
  portfolio,
  stocks,
  totalPosition: calculateTotalPosition(portfolio, stocks),
  cash: "$5,000.00",
});

const mdp = {
  fetchStocks,
};

export default connect(msp, mdp)(Portfolio);
