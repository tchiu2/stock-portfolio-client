import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

import { formatCurrency } from '../../util/format_util';
import Button from '../shared/Button';

class OrderWidget extends Component {
  state = {
    symbol: '',
    quantity: '',
    buy_sell: 'buy',
  }

  componentWillUnmount() {
    this.props.clearTransactionErrors();
  }

  update = field => e => this.setState({ [field]: e.target.value }); 

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTransaction(this.state);
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
    const { cashBalance } = this.props;
    return (
      <Paper style={{ padding: 24 }}>
        <Grid container direction="column">
          <Grid item>
            <Typography 
              variant="h5" 
              align="left"
              gutterBottom
            >
              Place an order | Balance: {formatCurrency(cashBalance)}
            </Typography>
          </Grid>
          <Grid item>
            <FormControl margin="dense" component="fieldset">
              <FormLabel>Order type:</FormLabel>
              <RadioGroup
                row
                aria-label="Buy/Sell"
                name="buySell"
                value={this.state.buy_sell}
                onChange={this.update("buy_sell")}
              >
                <FormControlLabel value="buy" control={<Radio />} label="Buy" />
                <FormControlLabel value="sell" disabled control={<Radio />} label="Sell" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl margin="dense" required fullWidth>
              <InputLabel htmlFor="symbol">Symbol</InputLabel>
              <Input name="symbol" 
                type="text" 
                required
                value={this.state.symbol} 
                onChange={this.update("symbol")}
              />
            </FormControl>
            {this.renderErrors("stock")}
          </Grid>
          <Grid item>
            <FormControl margin="dense" required fullWidth>
              <InputLabel htmlFor="quantity">Quantity</InputLabel>
              <Input name="quantity" 
                type="number" 
                required
                min="0"
                step="1"
                pattern="\d+"
                value={this.state.quantity} 
                onChange={this.update("quantity")}
              />
            </FormControl>
            {this.renderErrors("quantity")}
          </Grid>
          {this.renderErrors("balance")}
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Place order
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default OrderWidget;
