import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TransactionRow from './TransactionRow';
import Heading from '../shared/Heading';

const Transactions = ({ transactions }) => (
  <div>
    <Grid container spacing={40}>
      <Grid item xs={12}>
        <Heading align="left">Transactions</Heading>
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
      </Grid>
    </Grid>
  </div>
);

export default Transactions;
