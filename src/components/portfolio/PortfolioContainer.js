import { connect } from 'react-redux';
import Portfolio from './Portfolio';

const msp = ({ entities: { portfolio } }) => ({
  portfolio: Object.entries(portfolio),
  totalPosition: "$5,943.34",
  cash: "$5,000.00",
});

const mdp = {
};

export default connect(msp, mdp)(Portfolio);
