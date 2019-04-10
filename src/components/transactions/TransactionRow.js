import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '../shared/TableCell';

import { formatCurrency } from '../../util/format_util';

const TransactionRow = ({ date, symbol, buySell, quantity, price, total }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {date}
    </TableCell>
    <TableCell align="left">{symbol}</TableCell>
    <TableCell align="left">{buySell}</TableCell>
    <TableCell align="right">{quantity.toLocaleString('en')}</TableCell>
    <TableCell align="right">{formatCurrency(price)}</TableCell>
    <TableCell align="right">{formatCurrency(total)}</TableCell>
  </TableRow>
);

export default TransactionRow;
