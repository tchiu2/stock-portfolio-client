import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import { formatCurrency } from '../../util/format_util';
import PortfolioRow from './PortfolioRow';
import Heading from '../shared/Heading';

const Portfolio = ({ portfolio, users, currentUser }) => {
    const cash = users[currentUser] ? users[currentUser].cashBalance : 0; 
    const totalPosition = Object.values(portfolio).reduce((total, item) => total + item.value, 0);
    return (
      <div>
        <Grid container spacing={32}>
          <Grid item xs={8}>
            <Heading align="left">Portfolio | {formatCurrency(totalPosition)}</Heading>
            <Table>
              <TableHead>
                <PortfolioRow symbol="Symbol" name="Company Name" shares="Shares" value="Position" />
              </TableHead>
              <TableBody>
                {Object.entries(portfolio).map(([symbol, data]) =>
                  <PortfolioRow
                    key={symbol}
                    symbol={symbol}
                    name={data.name}
                    shares={data.shares}
                    value={data.value}
                  />
                )}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs>
            <Heading>Balance: {formatCurrency(cash)}</Heading>
          </Grid>
        </Grid>
      </div>
    );
  }

export default Portfolio;
