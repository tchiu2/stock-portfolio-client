import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import '../styles/App.css';
import LoginFormContainer from './LoginForm';

const App = store => (      
  <HashRouter>
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
