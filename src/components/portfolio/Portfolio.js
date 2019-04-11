import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

import { formatCurrency } from '../../util/format_util';
import PortfolioRow from './PortfolioRow';
import OrderWidget from '../orders/OrderWidgetContainer';

const Portfolio = ({ portfolio, loading, users, currentUser }) => {
    const totalPosition = Object.values(portfolio).reduce((total, item) => total + item.value, 0);
    return (
      <div style={{ margin: 24 }}>
        <Grid container spacing={32}>
          <Grid item xs={9}>
            <Paper style={{ padding: 24 }}>
              {loading
                ? (
                  <CircularProgress />
                ) : (
                  <>
                  <Typography variant="h4" align="left">Portfolio | {formatCurrency(totalPosition)}</Typography>
                  <Table>
                    <TableHead>
                      <PortfolioRow
                        symbol="Symbol"
                        name="Company Name"
                        shares="Owned Shares"
                        price="Latest Price"
                        value="Position Value"
                        change="Day Change"
                      />
                    </TableHead>
                    <TableBody>
                      {Object.values(portfolio).map(position =>
                        <PortfolioRow
                          key={position.symbol}
                          symbol={position.symbol}
                          name={position.name}
                          shares={position.shares}
                          price={position.price}
                          value={position.value}
                          change={position.change}
                          changePct={position.changePct}
                        />
                      )}
                    </TableBody>
                  </Table>
                  </>
                )
              }
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
