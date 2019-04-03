import React, { Component } from 'react';
import '../../styles/LoginForm.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
    const { errors } = this.props;
    return (
      <main className="login"> <Paper>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form>
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
          </form>
        </Paper>
      </main>
    );
  }
}

export default LoginForm;
