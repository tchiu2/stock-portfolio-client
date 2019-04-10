import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

import { formatCurrency } from '../../util/format_util';
import PortfolioRow from './PortfolioRow';
import OrderWidget from '../orders/OrderWidgetContainer';

const Portfolio = ({ portfolio, users, currentUser }) => {
    const totalPosition = Object.values(portfolio).reduce((total, item) => total + item.value, 0);
    return (
      <div style={{ margin: 24 }}>
      <Grid container spacing={32}>
        <Grid item xs={9}>
          <Paper style={{ padding: 24 }}>
            <Typography variant="h4" align="left">Portfolio | {formatCurrency(totalPosition)}</Typography>
            <Table>
              <TableHead>
                <PortfolioRow
                  symbol="Symbol"
                  name="Company Name"
                  shares="Owned Shares"
                  value="Position Value"
                  change="Day Change"
                />
              </TableHead>
              <TableBody>
                {Object.entries(portfolio).map(([symbol, data]) =>
                  <PortfolioRow
                    key={symbol}
                    symbol={symbol}
                    name={data.name}
                    shares={data.shares}
                    value={data.value}
                    change={data.change}
                    changePct={data.changePct}
                  />
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs>
          <OrderWidget />
        </Grid>
      </Grid>
      </div>
    );
  }

export default Portfolio;
