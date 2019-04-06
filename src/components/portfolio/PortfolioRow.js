import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PortfolioRow = ({ symbol, name, shares, value }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {symbol}
    </TableCell>
    <TableCell align="left">{name}</TableCell>
    <TableCell align="right">{shares}</TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

export default PortfolioRow;
