import { 
  RECEIVE_TRANSACTION_ERRORS,
  CLEAR_TRANSACTION_ERRORS,
} from '../actions/transaction_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return action.errors;
    case CLEAR_TRANSACTION_ERRORS:
      return {};
    default:
      return state;
  }
};
