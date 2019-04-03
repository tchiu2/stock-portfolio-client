import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = ({ errors: { session } }) => ({
  user: { name: '', email: '', password: '' },
  errors: session,
  formType: 'signup',
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(SessionForm);
