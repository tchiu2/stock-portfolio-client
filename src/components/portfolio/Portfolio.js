import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import PortfolioRow from './PortfolioRow';
import Heading from '../shared/Heading';

class Portfolio extends Component {
  componentDidMount() {
    this.props.fetchStocks(Object.keys(this.props.portfolio));
  }

  render() {
    const { portfolio, stocks, cash, totalPosition } = this.props;
    return (
      <div style={{ flexGrow: 1, width: '100%', overflowX: 'auto', padding: 20 }}>
        <Grid container spacing={40}>
          <Grid item xs={8}>
            <Heading align="left" >Portfolio ({totalPosition})</Heading>
            <Table>
              <TableHead>
                <PortfolioRow symbol="Symbol" name="Company Name" shares="Shares" value="Position" />
              </TableHead>
              <TableBody>
                {Object.keys(stocks).map(symbol =>
                  <PortfolioRow
                    symbol={symbol}
                    name={stocks[symbol].companyName}
                    shares={portfolio[symbol]}
                    value={stocks[symbol].latestPrice * portfolio[symbol]}
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
