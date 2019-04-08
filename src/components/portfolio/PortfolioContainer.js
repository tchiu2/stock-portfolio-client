import React, { Component } from 'react';
import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { fetchPortfolio } from '../../actions/portfolio_actions';

class PortfolioContainer extends Component {
  componentDidMount() {
    this.props.currentUser && this.props.fetchPortfolio(this.props.currentUser);
  }

  render() {
    return <Portfolio {...this.props} />
  }
}

const msp = ({ entities: { users, portfolio }, session: { currentUser } }) => ({
  portfolio,
  users,
  totalPosition: Object.values(portfolio).reduce((total, item) => total + (item * 100), 0),
  currentUser,
});

const mdp = {
  fetchPortfolio,
};

export default connect(msp, mdp)(PortfolioContainer);
