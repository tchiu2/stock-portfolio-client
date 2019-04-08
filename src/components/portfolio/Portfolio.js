import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import { formatCurrency } from '../../util/format_util';
import PortfolioRow from './PortfolioRow';
import Heading from '../shared/Heading';

class Portfolio extends Component {
  render() {
    const { portfolio, cash, totalPosition } = this.props;
    return (
      <div style={{ flexGrow: 1, width: '100%', overflowX: 'auto', padding: 20 }}>
        <Grid container spacing={40}>
          <Grid item xs={8}>
            <Heading align="left">Portfolio | {formatCurrency(totalPosition)}</Heading>
            <Table>
              <TableHead>
                <PortfolioRow symbol="Symbol" name="Company Name" shares="Shares" value="Position" />
              </TableHead>
              <TableBody>
                {Object.keys(portfolio).map(symbol =>
                  <PortfolioRow
                    key={symbol}
                    symbol={symbol}
                    name="Name"
                    shares={portfolio[symbol]}
                    value={100 * portfolio[symbol]}
                  />
                )}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs>
            <Heading>Buying component goes here {cash}</Heading>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
