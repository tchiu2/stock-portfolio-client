import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Toolbar,
} from '@material-ui/core';

const TabsContainer = styled(Tabs)`
  flex-grow: 1;
`;

const UserInfoItem = styled(MenuItem)`
  font-weight: bold;
`;

const RightNavLinks = styled.div`
  padding-right: 16px;
`;

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

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

  handleClick = e => {
    this.handleClose(e);
    this.props.logout();
  };

  handleClose = () => this.setState({ anchorEl: null });

  handleMenu = e => this.setState({ anchorEl: e.currentTarget });

  render() {
    const { users, currentUser } = this.props;
    const { loggedIn, anchorEl, value } = this.state;
    const name = users[currentUser] ? users[currentUser].name.toUpperCase() : "";
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
            <Tab label="Portfolio" component={AdapterLink} to="/portfolio" selected />
            <Tab label="Transactions" component={AdapterLink} to="/transactions" />
          </TabsContainer>
          {loggedIn &&
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
								<MenuItem onClick={this.handleClick}>Logout</MenuItem>
							</Menu>
            </RightNavLinks>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Navbar);
