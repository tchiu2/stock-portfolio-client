import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

  update = field => e => this.setState({ [field]: e.target.value }); 

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTransaction(this.state);
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
            <FormControl component="fieldset">
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
              <InputLabel htmlFor="text">Symbol</InputLabel>
              <Input name="symbol" 
                type="text" 
                autoFocus 
                value={this.state.symbol} 
                onChange={this.update("symbol")}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl margin="dense" required fullWidth>
              <InputLabel htmlFor="text">Quantity</InputLabel>
              <Input name="quantity" 
                type="number" 
                min="0"
                step="1"
                pattern="\d+"
                value={this.state.quantity} 
                onChange={this.update("quantity")}
              />
            </FormControl>
          </Grid>
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
