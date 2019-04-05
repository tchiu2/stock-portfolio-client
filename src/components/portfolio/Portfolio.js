import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import PortfolioRow from './PortfolioRow';
import Heading from '../shared/Heading';

const Portfolio = ({ portfolio, cash, totalPosition}) => (
  <div style={{ flexGrow: 1, width: '100%', overflowX: 'auto', padding: 20 }}>
    <Grid container spacing={40}>
      <Grid item xs={8}>
        <Heading align="left" >Portfolio ({totalPosition})</Heading>
        <Table>
          <TableHead>
            <PortfolioRow ticker="Ticker" name="Company" shares="Shares" value="Position" />
          </TableHead>
          <TableBody>
            {portfolio.map(([ticker, shares]) =>
              <PortfolioRow 
                key={ticker} 
                ticker={ticker} 
                name="Name goes here"
                shares={shares} 
                value="300" 
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

export default Portfolio;
