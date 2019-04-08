import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './Navbar';

const msp = ({ entities: { users }, session: { currentUser } }) => {
  return {
    users,
    currentUser,
  }
}

const mdp = {
  logout,
};

export default connect(msp, mdp)(Navbar);
