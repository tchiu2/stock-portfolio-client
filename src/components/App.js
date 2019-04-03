import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import '../styles/App.css';
import Login from './session/LoginContainer';

const App = ({ store }) => (      
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
