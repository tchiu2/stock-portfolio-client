import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '../shared/Button';

const Greeting = styled(Typography)`
  flex-grow: 1;
`;

class Navbar extends Component {
  handleClick = action => e => {
    e.preventDefault();
    switch(action) {
      case 'login':
        return this.props.history.push('/login');
      case 'signup':
        return this.props.history.push('/register');
      case 'logout':
        return this.props.logout();
      default:
        return;
    }
  }

  render() {
    const links = this.props.currentUser.id === null
      ? (
        <>
          <Button onClick={this.handleClick('login')} color="inherit">Login</Button>
          <Button onClick={this.handleClick('signup')} color="inherit">Signup</Button>
        </>
      ) : (
        <Button onClick={this.handleClick('logout')} color="inherit">Logout</Button>
      );

    return (
      <AppBar position="static">
        <Toolbar>
          <Greeting align="left" variant="h6" color="inherit">
            {this.props.currentUser.id ? `Welcome back, ${this.props.currentUser.name}` : "Homepage"}
          </Greeting>
          {links}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Navbar);
