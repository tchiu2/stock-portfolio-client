import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '../shared/TableCell';

import { formatCurrency, formatPriceChange } from '../../util/format_util';

const styles = {
  cell: {
  },
  cellRed: {
    color: 'red',
  },
  cellGreen: {
    color: 'green',
  },
}

const PortfolioRow = ({ symbol, name, shares, value, change, changePct }) => (
  <TableRow>
    <TableCell 
      component="th"
      scope="row"
      style={{
        ...styles.cell,
        ...(change > 0 ? styles.cellGreen : (change < 0 ? styles.cellRed : {}))
      }}
    >
      {symbol}
    </TableCell>
    <TableCell align="left">{name}</TableCell>
    <TableCell align="right">{shares.toLocaleString('en')}</TableCell>
    <TableCell
      align="right"
      style={{
        ...styles.cell,
        ...(change > 0 ? styles.cellGreen : (change < 0 ? styles.cellRed : {}))
      }}
    >
      {formatCurrency(value)}
    </TableCell>
    <TableCell
      align="right"
      style={{
        ...styles.cell,
        ...(change > 0 ? styles.cellGreen : (change < 0 ? styles.cellRed : {}))
      }}
    >
      {formatPriceChange(change, changePct)}
    </TableCell>
  </TableRow>
);

export default PortfolioRow;
