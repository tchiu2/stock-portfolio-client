import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import '../styles/App.css';
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </JssProvider>
);

export default App;
