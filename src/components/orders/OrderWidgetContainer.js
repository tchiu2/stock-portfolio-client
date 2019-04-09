import { connect } from 'react-redux';
import OrderWidget from './OrderWidget';
import { postTransaction } from '../../actions/transaction_actions';

const msp = ({ entities: { users }, session: { currentUser } }) => ({
  cashBalance: users[currentUser] ? users[currentUser].cashBalance : 0,
});

const mdp = {
  postTransaction,
};

export default connect(msp, mdp)(OrderWidget);
