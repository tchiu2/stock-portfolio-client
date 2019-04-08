import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { fetchPortfolio } from '../../actions/portfolio_actions';

const msp = ({ entities: { portfolio }, session: { currentUser } }) => ({
  portfolio,
  cash: "$5,000.00",
  totalPosition: 200000,
  currentUser,
});

const mdp = {
  fetchPortfolio,
};

export default connect(msp, mdp)(Portfolio);
