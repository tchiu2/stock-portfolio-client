import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import Transactions from './transactions/Transactions';
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
