import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

import TransactionRow from './TransactionRow';

const Transactions = ({ transactions, loading }) => (
  <Grid container>
    <Grid item xs={12}>
      <Paper style={{ padding: 24, margin: 24, overflow: 'hidden' }}>
        {loading
          ? (
            <CircularProgress />
          ) : (
            <>
            <Typography variant="h4" align="left">Transactions</Typography>
            <Table>
              <TableHead>
                <TransactionRow
                  date="Trade Date"
                  symbol="Symbol"
                  buySell="Buy/Sell"
                  quantity="Quantity"
                  price="Price"
                  total="Total Transaction Amount"
                />
              </TableHead>
              <TableBody>
                {Object.values(transactions).map(txn =>
                  <TransactionRow
                    key={txn.id}
                    date={txn.tradeDate}
                    symbol={txn.symbol}
                    buySell={txn.buySell}
                    quantity={txn.quantity}
                    price={txn.price}
                    total={txn.quantity * txn.price}
                  />
                )}
              </TableBody>
            </Table>
            </>
          )
        }
      </Paper>
    </Grid>
  </Grid>
);

export default Transactions;
