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

class OrderConfirmDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = e => {
    e.preventDefault();
    this.setState({ open: true });
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ open: false });
  };

  handleConfirm = e => {
    e.preventDefault();
    this.props.handleSubmit(e);
    this.handleClose(e);
  };

  render() {
    const { buy_sell, quantity, symbol } = this.props;
    return (
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          style={{ marginTop: 24 }}
        >
          Place order 
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>{"Confirm order"}</DialogTitle>
          <DialogContent>
            <DialogContentText component="div">
              <Typography variant="subtitle1">Type: {buy_sell.toUpperCase()}</Typography>
              <Typography variant="subtitle1">Symbol: {symbol}</Typography>
              <Typography variant="subtitle1">Quantity: {quantity} shares</Typography>
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
