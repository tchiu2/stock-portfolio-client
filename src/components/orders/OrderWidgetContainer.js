import { connect } from 'react-redux';
import OrderWidget from './OrderWidget';
import {
  postTransaction,
  clearTransactionErrors,
} from '../../actions/transaction_actions';
import { fetchUser } from '../../actions/session_actions';

const msp = ({ entities: { users }, session: { currentUser }, errors: { transaction } }) => ({
  cashBalance: users[currentUser] ? users[currentUser].cashBalance : null,
  errors: transaction,
  currentUser,
});

const mdp = {
  postTransaction,
  clearTransactionErrors,
	fetchUser,
};

export default connect(msp, mdp)(OrderWidget);
