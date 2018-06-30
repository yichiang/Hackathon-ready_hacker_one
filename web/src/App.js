import React, {Component } from 'react';
import { BrowserRouter,
         Route,
         Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/home/Login';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={() =><Login/>} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
