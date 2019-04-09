import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import Portfolio from './portfolio/PortfolioContainer';
import Transactions from './transactions/TransactionsContainer';
import Navbar from './navbar/NavbarContainer';

const Main = () => (
  <main>
    <Navbar />
    <Paper style={{ margin: 24, overflow: 'hidden' }}>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/transactions" component={Transactions} />
      </Switch>
    </Paper>
  </main>
);

export default Main;
