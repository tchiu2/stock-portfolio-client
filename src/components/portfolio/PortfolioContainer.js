import { connect } from 'react-redux';
import Portfolio from './Portfolio';

const msp = ({ entities: { portfolio } }) => ({
  portfolio,
  cash: "$5,000.00",
  totalPosition: 200000,
});

const mdp = {
};

export default connect(msp, mdp)(Portfolio);
