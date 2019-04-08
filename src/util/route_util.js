import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { fetchUser } from '../actions/session_actions';

const msp = ({ session: { currentUser } }) => ({
  currentUser,
  loggedIn: Boolean(currentUser),
});

const mdp = {
  fetchUser,
}

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/portfolio" /> : <Component {...props} />
    )}
  />
);

class Protected extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUser(this.props.currentUser);
  }

  render() {
    const { loggedIn, path, component: Component } = this.props;
    return (
      <Route
        path={path}
        render={props => (
          loggedIn ? <Component {...props} /> : <Redirect to="/login" /> 
        )}
      />
    );
  }
}

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp, mdp)(Protected));
