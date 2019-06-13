import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Login from './session/LoginContainer';
import Register from './session/RegisterContainer';
import Main from './Main';

const App = ({ store }) => (      
  <StylesProvider injectFirst>
    <Provider store={store}>
      <HashRouter>
        <CssBaseline />
        <div className="App">
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <AuthRoute path="/register" component={Register} />
            <ProtectedRoute path="/" component={Main} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </StylesProvider>
);

export default App;
