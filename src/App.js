import React from 'react';
import { Switch, Route, /* useHistory, */ Redirect } from 'react-router-dom';
// import axios from 'axios';
// import store from './store'

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking';
import Battle from './pages/Battle';
import Character from './pages/Character';

// CSS
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      // user: null,
      signup: false,
      character: false
    };
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.checkLoginRoute = this.checkLoginRoute.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      isLogin: true
      // user: info,
    });
  }

  signup() {
    this.setState(
      {
        signup: true,
        // user: null,
        isLogin: false
      },
      () => this.setState({ signup: false })
    );
  }

  create(name) {
    if (window.confirm(`${name}(으)로 하겠습니까?`)) {
      this.setState({
        character: {
          name,
          level: 1,
          maxHp: 100,
          hp: 100,
          power: 5,
          exp: 0
        }
      });
    }
  }

  logout() {
    this.setState({
      isLogin: false,
      // user: null,
      signup: false,
      character: false
    });
  }

  checkLoginRoute() {
    const { isLogin, character } = this.state;
    if (isLogin && character) {
      return <Redirect to="/battle" />;
    }
    if (isLogin && !character) {
      return <Character createCharacter={this.create} />;
    }
    return <Login login={this.login} isLogin={isLogin} />;
  }

  // attackCharacter() {
  //   this.setState({

  //   })
  // }

  render() {
    // let state = store.getState()
    const { isLogin, signup, character } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/login" render={() => this.checkLoginRoute()} />
          <Route
            exact
            path="/signup"
            render={() =>
              signup ? (
                <Redirect to="/login" />
              ) : (
                <Signup signup={this.signup} isLogin={isLogin} />
              )
            }
          />
          <Route path="/login" render={() => <Login login={this.login} />} />
          <Route exact path="/ranking" render={() => <Ranking />} />
          <Route
            exact
            path="/battle"
            render={() =>
              isLogin ? (
                <Battle logout={this.logout} user={character} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/"
            render={() => {
              if (isLogin && character) {
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
