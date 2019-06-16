import React from 'react';
import {
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableHead,
  TableBody,
  Typography,
} from '@material-ui/core';

import { formatCurrency } from '../../util/format_util';
import PortfolioRow from './PortfolioRow';
import OrderWidget from '../orders/OrderWidgetContainer';

const Portfolio = ({ portfolio, loading, users, currentUser, fetchPortfolio }) => {
    const totalPosition = Object.values(portfolio).reduce((total, item) => total + item.value, 0);
    return (
      <div style={{ margin: 24 }}>
        <Grid container spacing={3}>
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
          <Grid item xs={3}>
            <OrderWidget fetchPortfolio={() => fetchPortfolio(currentUser)}/>
          </Grid>
        </Grid>
      </div>
    );
  }

export default Portfolio;
