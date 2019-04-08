import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TransactionRow from './TransactionRow';
import Heading from '../shared/Heading';

const Transactions = ({ transactions }) => (
  <div style={{ flexGrow: 1, width: '100%', overflowX: 'auto', padding: 20 }}>
    <Grid container spacing={40}>
      <Grid item xs={8}>
        <Heading align="left">Transactions</Heading>
        <Table>
          <TableHead>
            <TransactionRow
              date="Trade Date"
              symbol="Symbol"
              buySell="Buy/Sell"
              quantity="Quantity"
              price="Price"
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
              />
            )}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  </div>
);

export default Transactions;
