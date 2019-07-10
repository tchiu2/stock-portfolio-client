import React, { Component } from 'react';
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

import { formatCurrency } from '../../util/format_util';
import { fetchPrice } from '../../util/transaction_api_util';
import OrderConfirmDialog from './OrderConfirmDialog';
import SymbolSelect from './SymbolSelect';

const initialState = {
  symbol: '',
  name: '',
  quantity: '',
  buy_sell: 'buy',
  price: '',
};

class OrderWidget extends Component {
  state = initialState;

  componentWillUnmount() {
    this.props.clearTransactionErrors();
  }

  update = field => e => this.setState({ [field]: e.target.value });

  handleSelect = option =>
    option === null
      ? this.setState({ symbol: '', name: '' })
      : this.setState({
        symbol: option.value,
        name: option.name
      });

  handleQuantityChange = e => {
    const { value } = e.target;

    if (value === "" || value.match(/^[1-9][0-9]*$/)) {
      this.setState({ quantity: value });
    }
  };

  handleSubmit = e => {
    const {
      postTransaction,
      fetchPortfolio,
      fetchUser,
      currentUser,
    } = this.props;

    postTransaction({
      symbol: this.state.symbol,
      buy_sell: this.state.buy_sell,
      quantity: this.state.quantity,
    })
      .then(() => this.setState(initialState, () => {
				fetchPortfolio();
				fetchUser(currentUser);
			}));
	};

  fetchPrice = () => {
    if (this.state.symbol.length === 0) {
      return this.setState({ price: '' });
    }

    this.setState({ price: "Fetching price info..." }, () =>
      fetchPrice(this.state.symbol)
        .then(price => this.setState({ price: price.toFixed(2) }))
        .catch(err => err.text().then(message => this.setState({ price: message })))
    );
  };

  renderErrors = key => {
    if (this.props.errors[key]) {
      const label = key !== "error" ? key[0].toUpperCase() + key.slice(1) : "";
      return (
        <FormHelperText error>
          {label} {this.props.errors[key]}
        </FormHelperText>
      );
    }
  };

  render() {
    const { cashBalance } = this.props;
    return (
      <Paper style={{ padding: 24 }}>
        <Grid container direction="column">
          <Grid item>
            <Typography 
              variant="h4"
              align="left"
              gutterBottom
            >
              Place an order
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              align="left"
              gutterBottom
            >
            {cashBalance
              ? `Balance: ${formatCurrency(cashBalance)}`
              : <CircularProgress />
            }
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
                <FormControlLabel value="sell" control={<Radio />} label="Sell" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl margin="dense" required fullWidth>
              <SymbolSelect
                value={
                  this.state.symbol !== ""
                  ? {
                    value: this.state.symbol,
                    label: this.state.symbol
                    }
                  : null
                  }
                onChange={this.handleSelect}
                onBlur={this.fetchPrice}
              />
            </FormControl>
            {this.renderErrors("stock")}
          </Grid>
          <Grid item>
            <FormControl margin="dense" required fullWidth>
              <InputLabel shrink htmlFor="quantity">Quantity</InputLabel>
              <Input name="quantity" 
                required
                placeholder="Enter quantity"
                value={this.state.quantity} 
                onChange={this.handleQuantityChange}
                inputProps={{
                  min: "1",
                  step: "1",
                }}
              />
            </FormControl>
            {this.renderErrors("quantity")}
          </Grid>
          <Grid item>
            <FormControl margin="dense" fullWidth>
              <InputLabel shrink htmlFor="name">Company Name</InputLabel>
              <Input name="name"
                type="text"
                disabled
                value={this.state.name}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl margin="dense" fullWidth>
              <InputLabel htmlFor="price">Estimated Share Price</InputLabel>
              <Input name="price"
                type="text"
                disabled
                value={this.state.price}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          {this.renderErrors("balance")}
          <Grid item>
            <OrderConfirmDialog
              handleSubmit={this.handleSubmit}
              {...this.state}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default OrderWidget;
