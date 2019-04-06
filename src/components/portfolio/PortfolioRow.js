import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { formatCurrency } from '../../util/format_util';

const PortfolioRow = ({ symbol, name, shares, value }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {symbol}
    </TableCell>
    <TableCell align="left">{name}</TableCell>
    <TableCell align="right">{shares.toLocaleString('en')}</TableCell>
    <TableCell align="right">{formatCurrency(value)}</TableCell>
  </TableRow>
);

export default PortfolioRow;
