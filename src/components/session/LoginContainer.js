import { connect } from 'react-redux';
import Login from './Login';
import { login, clearErrors } from '../../actions/session_actions';

const msp = ({ errors: { session } }) => ({
  user: { email: '', password: '' },
  errors: session,
});

const mdp = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(Login);
