import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Button from '../shared/Button';
import Heading from '../shared/Heading';

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
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.processForm(this.state);
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
    return (
      <FormContainer> 
        <Paper>
          <Grid container direction='column' spacing={16}>
            <Grid item>
              <Heading component="h1" variant="h5">
                {this.props.formType === 'login' ? "Sign in" : "Register"}
              </Heading>
            </Grid>
            <Form>
              <Grid container direction='column' spacing={8}>
                {this.props.formType === 'signup' && 
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
                      autoFocus={this.props.formType === 'login'}
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
                    {this.props.formType === 'login' ? "Sign in" : "Register"}
                  </Button>
                </Grid>
                <Grid item>
                  <Link
                    color="primary"
                    component={RouterLink}
                    to={this.props.formType === 'login' ? "/register" : "/login"}
                  >
                  {this.props.formType === 'login' 
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
