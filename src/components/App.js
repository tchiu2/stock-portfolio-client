import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import '../styles/App.css';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Login from './session/LoginContainer';
import Register from './session/RegisterContainer';
import Main from './Main';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const App = ({ store }) => (      
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <AuthRoute path="/register" component={Register} />
            <ProtectedRoute path="/" component={Main} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </JssProvider>
);

export default App;
