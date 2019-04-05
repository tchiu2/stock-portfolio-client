import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PortfolioRow = ({ ticker, name, shares, value }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {ticker}
    </TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center">{shares}</TableCell>
    <TableCell align="center">{value}</TableCell>
  </TableRow>
);

export default PortfolioRow;
