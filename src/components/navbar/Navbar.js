import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '../shared/Button';

const TabsContainer = styled(Tabs)`
  flex-grow: 1;
`;

const UserInfoItem = styled(MenuItem)`
  font-weight: bold;
`;

const RightNavLinks = styled.div`
  padding-right: 16px;
`;

class Navbar extends Component {
  state = {
    loggedIn: Boolean(this.props.currentUser),
    anchorEl: null,
    value: this.props.location.pathname === "/portfolio" ? 0 : 1,
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({ loggedIn: Boolean(this.props.currentUser) });
    }
  }

  handleChange = (e, value) => this.setState({ value });

  handleClick = action => e => {
    e.preventDefault();
    this.handleClose(e);
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
  };

  handleClose = e => this.setState({ anchorEl: null });

  handleMenu = e => this.setState({ anchorEl: e.currentTarget });

  render() {
    const { users, currentUser } = this.props;
    const { loggedIn, anchorEl, value } = this.state;
    const name = users[currentUser] ? users[currentUser].name : "";
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static" color="default">
      <Toolbar disableGutters>
          <TabsContainer
            textColor="inherit" 
            indicatorColor="primary"
            value={value} 
            onChange={this.handleChange}
          >
            <Tab label="Portfolio" component={NavLink} to="/portfolio" selected />
            <Tab label="Transactions" component={NavLink} to="/transactions" />
          </TabsContainer>
          {loggedIn ? (
            <RightNavLinks>
              <Avatar 
                children={name[0]} 
                onClick={this.handleMenu}
              />
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={this.handleClose}
							>
                <UserInfoItem disabled>{name}</UserInfoItem>
								<MenuItem onClick={this.handleClick("logout")}>Logout</MenuItem>
							</Menu>
            </RightNavLinks>
          ) : (
            <RightNavLinks>
              <Button onClick={this.handleClick('login')} color="primary">Login</Button>
              <Button onClick={this.handleClick('signup')} color="primary">Signup</Button>
            </RightNavLinks>
          )}

        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Navbar);
