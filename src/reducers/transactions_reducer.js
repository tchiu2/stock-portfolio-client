import { 
  RECEIVE_TRANSACTIONS, 
  RECEIVE_TRANSACTION,
} from '../actions/transaction_actions';

export default (state = {}, action) => {
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
