import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  Link,
  Typography,
} from '@material-ui/core';

import Portfolio from './portfolio/PortfolioContainer';
import Transactions from './transactions/TransactionsContainer';
import Navbar from './navbar/NavbarContainer';

const Attribution = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Data provided by '}
    <Link color="inherit" href="https://iexcloud.io">
      IEX Cloud
    </Link>
  </Typography>
);

const Main = () => (
  <main>
    <Navbar />
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/transactions" component={Transactions} />
    </Switch>
    <Attribution />
  </main>
);

export default Main;
