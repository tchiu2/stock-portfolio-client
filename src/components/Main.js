import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './portfolio/PortfolioContainer';
import Transactions from './transactions/TransactionsContainer';
import Navbar from './navbar/NavbarContainer';

const Main = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/transactions" component={Transactions} />
    </Switch>
  </main>
);

export default Main;
