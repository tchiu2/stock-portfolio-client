import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../actions/transaction_actions';
import Transactions from './Transactions';

class TransactionsContainer extends Component {
  componentDidMount() {
    this.props.currentUser && this.props.fetchTransactions(this.props.currentUser);
  }

  render() {
    return <Transactions {...this.props} />
  }
}

const msp = ({ entities: { transactions }, session: { currentUser } }) => ({
  transactions,
  currentUser
});

const mdp = {
  fetchTransactions,
};

export default connect(msp, mdp)(TransactionsContainer);
