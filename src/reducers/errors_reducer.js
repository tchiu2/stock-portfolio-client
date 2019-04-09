import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import transaction from './transaction_errors_reducer';

export default combineReducers({
  session,
  transaction,
});
