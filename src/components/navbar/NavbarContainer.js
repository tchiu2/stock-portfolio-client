import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './Navbar';

const msp = ({ session: { currentUser } }) => ({
  currentUser, 
})

const mdp = {
  logout,
};

export default connect(msp, mdp)(Navbar);
