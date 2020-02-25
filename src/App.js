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
    isLogin: false,
    user: null,
    signup: false
  }

  login(info) {
    this.setState({
      isLogin: true,
      user: info
    })
  }

  signup() {
    this.setState({
      signup: true,
      user: null,
      isLogin: false
    }, () => this.setState({signup:false}))
  }
  render() {
    const { isLogin } = this.state

    return (
      <div>
      <Switch>
      <Route path="/login" render={() =>
            isLogin ? <Redirect to="/battle" />:
            <Login login={this.login.bind(this)} isLogin={isLogin} />} />
          <Route
            exact
            path="/signup"
            render={() => this.state.signup?<Redirect to='/login' />:<Signup signup={this.signup.bind(this)} isLogin={isLogin} />}
          />
        <Route
        path="/login"
        render={() => (
          <Login login={this.login.bind(this)}></Login>
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
      </div>
    );

  }
}

export default App;