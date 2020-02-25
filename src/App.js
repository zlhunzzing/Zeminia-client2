import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import store from './store'

//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking'
import Battle from './pages/Battle';

//CSS
import './App.css';

class App extends React.Component {

  render() {
    let state = store.getState()

    return (
      <Switch>
        <Route
        path="/login"
        render={() => (
          <Login></Login>
        )}
        />
        <Route
        exact
        path="/signup"
        render={() => (
          <Signup></Signup>
        )}
        />
        <Route
        exact
        path="/ranking"
        render={() => (
          <Ranking></Ranking>
        )}
        />
        <Route
        exact
        path="/battle"
        render={() => (
          <Battle></Battle>
        )}
        />
        <Route
            path="/"
            render={() => {
              if (state.isLogin) {
                return <Redirect to="/battle" />;
              }
              return <Redirect to="/login" />;
            }}
          />
      </Switch>
    );

  }
}

export default App;