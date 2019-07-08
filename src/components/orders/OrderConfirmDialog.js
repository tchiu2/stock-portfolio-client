import React, { Component } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';

import { formatCurrency } from '../../util/format_util';

class OrderConfirmDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = e => {
    this.setState({ open: true });
  };

  handleClose = e => {
    this.setState({ open: false });
  };

  handleConfirm = e => {
    this.props.handleSubmit(e);
    this.handleClose(e);
  };

  render() {
    const { buy_sell, quantity, symbol, price } = this.props;
    const type = buy_sell[0].toUpperCase() + buy_sell.slice(1);
    return (
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          style={{ marginTop: 24 }}
          disabled={quantity === "" || symbol === ""}
        >
          Place order 
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Confirm order</DialogTitle>
          <DialogContent dividers>
            <DialogContentText component="div">
              <Typography color="primary" variant="h6">Details</Typography>
              <Typography color="textPrimary" variant="subtitle1">Type: {type}</Typography>
              <Typography color="textPrimary" variant="subtitle1">Symbol: {symbol}</Typography>
              <Typography color="textPrimary" variant="subtitle1">{quantity} shares @ ${price}</Typography>
              <Typography color="textPrimary" variant="subtitle1">Total: {formatCurrency(price * quantity)}</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleConfirm} variant="contained" color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default OrderConfirmDialog;
