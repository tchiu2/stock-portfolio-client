import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Link,
  Paper,
  Typography,
} from '@material-ui/core';

import Button from '../shared/Button';

const FormContainer = styled.main`
  margin: auto;
  padding: 2em;
  max-width: 500px;
`;

const Form = styled.form`
  padding: 0 2em;
  padding-bottom: 1em;
`;

class SessionForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  loginAsGuest = e => {
    this.setState({
      email: 'tc@gmail.com',
      password: 'password',
    }, () => this.props.processForm(this.state));
  }

  renderErrors = key => {
    if (this.props.errors[key]) {
      const label = key !== "error" ? key[0].toUpperCase() + key.slice(1) : "";
      return (
        <FormHelperText error>
          {label} {this.props.errors[key]}
        </FormHelperText>
      );
    }
  }

  render() {
    const isLoginForm = this.props.formType === 'login';

    return (
      <FormContainer> 
        <Paper>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography align="center" style={{ paddingTop: '1em' }} component="h1" variant="h5">
                {isLoginForm ? 'Sign in' : 'Register'}
              </Typography>
            </Grid>
            <Form>
              <Grid container direction="column" spacing={1}>
                {!isLoginForm &&
                  <Grid item>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="text">Name</InputLabel>
                      <Input name="name" 
                        type="text" 
                        autoFocus 
                        value={this.state.name} 
                        onChange={this.update("name")}
                      />
                    </FormControl>
                    {this.renderErrors("name")}
                  </Grid>
                }
                <Grid item>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input name="email" 
                      type="email" 
                      autoComplete="email" 
                      autoFocus={isLoginForm}
                      value={this.state.email} 
                      onChange={this.update("email")}
                    />
                  </FormControl>
                  {this.renderErrors("email")}
                </Grid>
                <Grid item>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" 
                      type="password" 
                      id="password" 
                      autoComplete="current-password" 
                      value={this.state.password}
                      onChange={this.update("password")}
                    />
                  </FormControl>
                  {this.renderErrors("password")}
                </Grid>
                <Grid item>{this.renderErrors("error")}</Grid>
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    {isLoginForm ? "Sign in" : "Register"}
                  </Button>
                </Grid>
                {isLoginForm &&
                  <Grid item>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={this.loginAsGuest}
                    >
                      Sign In as Guest
                    </Button>
                  </Grid>
                }
                <Grid item>
                  <Link
                    color="primary"
                    component={RouterLink}
                    to={isLoginForm ? "/register" : "/login"}
                  >
                  {isLoginForm
                    ? "Don't have an account? Sign up here." 
                    : "Returning user? Sign in here."
                  } 
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Paper>
      </FormContainer>
    );
  }
}

export default SessionForm;
