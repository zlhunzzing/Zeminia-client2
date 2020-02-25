import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking'
import Battle from './pages/Battle';

//CSS
import './App.css';

class App extends React.Component {
  state = {
    isLogin: false
  }

  render() {
    const { isLogin } = this.state

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
              if (isLogin) {
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