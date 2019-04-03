import React, { Component } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

import Button from '../shared/Button';
import ErrorText from '../shared/ErrorText';
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

  update = field => e => this.setState({ [field]: e.target.value, }); 

  handleSubmit = e => {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    return (
      <FormContainer> 
        <CssBaseline />
        <Paper>
          <Grid container direction='column' spacing={16}>
            <Grid item>
              <Heading component="h1" variant="h5">
                Sign in
              </Heading>
            </Grid>
            <Form>
              <Grid container direction='column' spacing={8}>
                {this.props.formType === 'signup' ? 
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
                  </Grid>
                  : ""}
                <Grid item>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input name="email" 
                      type="email" 
                      autoComplete="email" 
                      autoFocus 
                      value={this.state.email} 
                      onChange={this.update("email")}
                    />
                  </FormControl>
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
                </Grid>
                <Grid item>
                  {this.props.errors !== "" ? <ErrorText>{this.props.errors}</ErrorText> : ""}
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Sign in
                  </Button>
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
