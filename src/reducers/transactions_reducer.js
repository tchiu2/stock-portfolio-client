import { RECEIVE_TRANSACTIONS } from '../actions/transaction_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return action.transactions.reduce((state, txn) => ({
        ...state,
        [txn.id]: txn,
      }), {});
    default:
      return state;
  }
};
