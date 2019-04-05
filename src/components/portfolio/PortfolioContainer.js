import { connect } from 'react-redux';
import Portfolio from './Portfolio';

const msp = (state) => ({
  portfolio: [
    { ticker: "AAPL", name: "Apple", shares: "6", value: "$2,300.09" },
  ],
  totalPosition: "$5,943.34",
  cash: "$5,000.00",
});

const mdp = {
};

export default connect(msp, mdp)(Portfolio);
