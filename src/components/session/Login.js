import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Form = styled.form`
  padding: 2em;
`;

const Main = styled.main`
  padding: 2em;
`;

class LoginForm extends Component {
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
    this.props.login(this.state);
  }

  render() {
    return (
      <Main> 
        <CssBaseline />
        <Paper>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Sign in
            </Button>
            <FormHelperText>{this.props.errors}</FormHelperText>
          </Form>
        </Paper>
      </Main>
    );
  }
}

export default LoginForm;
