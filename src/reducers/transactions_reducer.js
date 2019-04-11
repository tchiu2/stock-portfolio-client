import { combineReducers } from 'redux';
import { 
  RECEIVE_TRANSACTIONS, 
  RECEIVE_TRANSACTION,
  REQUEST_TRANSACTIONS,
} from '../actions/transaction_actions';

const history = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return action.transactions.reduce((state, txn) => ({
        ...state,
        [txn.id]: txn,
      }), {});
    case RECEIVE_TRANSACTION:
      return { ...state, [action.transaction.id]: action.transaction };
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return true;
    case RECEIVE_TRANSACTIONS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  history,
  loading,
});
