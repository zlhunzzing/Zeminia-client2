import React from 'react';
import { Switch, Route, /* useHistory, */ Redirect } from 'react-router-dom';
// import axios from 'axios';
import store from './store';

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
      character: false,
      monster: false
    };
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.checkLoginRoute = this.checkLoginRoute.bind(this);
    this.logout = this.logout.bind(this);
    this.generateMonster = this.generateMonster.bind(this);
    this.clearMonster = this.clearMonster.bind(this);
    this.attackCharacter = this.attackCharacter.bind(this);
    this.attackMonster = this.attackMonster.bind(this);
    this.heal = this.heal.bind(this);
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
          hp: 1,
          att: 5,
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

  async generateMonster() {
    const state = store.getState();
    await this.setState({
      monster: JSON.parse(
        JSON.stringify(
          state.dummyMob[Math.floor(Math.random() * state.dummyMob.length)]
        )
      )
    });
  }

  async clearMonster() {
    await this.setState({
      monster: false
    });
  }

  async attackCharacter() {
    const { monster } = this.state;
    if (monster.hp > 0) {
      await this.setState(
        prevState => ({
          character: {
            name: prevState.character.name,
            level: prevState.character.level,
            maxHp: prevState.character.maxHp,
            hp: prevState.character.hp - prevState.monster.att,
            att: prevState.character.att,
            exp: prevState.character.exp
          }
        }),
        () => {
          const { character } = this.state;
          if (character.hp <= 0) {
            this.setState(prevState => ({
              character: {
                name: prevState.character.name,
                level: prevState.character.level,
                maxHp: prevState.character.maxHp,
                hp: prevState.character.hp,
                att: prevState.character.att,
                exp: prevState.character.exp - prevState.monster.exp
              }
            }));
            // fetch("http://localhost:5001/logout", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         credentials: 'include',
            //         body: JSON.stringify(character)
            //     }
            // })
            if (window.confirm('계속하기')) {
              // fetch("http://localhost:5001/user", {
              //     method: 'GET',
              //     headers: {
              //         'Content-Type': 'application/json',
              //         credentials: 'include',
              //         body: JSON.stringify(character)
              //     }
              // })
              // .then(user=>{
              //   return user.json();
              // })
              // .then((data)=>{
              //   this.setState({
              //     character:
              //   })
              // })
              this.setState(prevState => ({
                character: {
                  name: prevState.character.name,
                  level: prevState.character.level,
                  maxHp: prevState.character.maxHp,
                  hp: prevState.character.maxHp,
                  att: prevState.character.att,
                  exp: prevState.character.exp
                }
              }));
              return null;
            }
            this.logout();
          }
          return null;
        }
      );
    } else if (monster.hp <= 0) {
      this.clearMonster();
    }
  }

  async attackMonster() {
    const state = store.getState();
    this.setState(
      prevState => ({
        monster: {
          name: prevState.monster.name,
          level: prevState.monster.level,
          hp: prevState.monster.hp - prevState.character.att,
          att: prevState.monster.att,
          exp: prevState.monster.exp
        }
      }),
      () => {
        const { monster } = this.state;
        if (monster.hp <= 0) {
          this.setState(prevState => ({
            character: {
              name: prevState.character.name,
              level: prevState.character.level,
              maxHp: prevState.character.maxHp,
              hp: prevState.character.hp,
              att: prevState.character.att,
              exp: prevState.character.exp + prevState.monster.exp
            }
          }));
          this.clearMonster();
          state.toggleMenu();
        }
      }
    );
  }

  async heal() {
    await this.setState(prevState => ({
      character: {
        name: prevState.character.name,
        level: prevState.character.level,
        maxHp: prevState.character.maxHp,
        hp: prevState.character.maxHp,
        att: prevState.character.att,
        exp: prevState.character.exp
      }
    }));
    this.showMessage('체력을 회복했습니다');
  }

  showMessage(msg) {
    const newMessage = document.createElement('div');
    newMessage.innerHTML = msg;

    const Messages = document.querySelector('.Messages');
    Messages.prepend(newMessage);

    // newMessage.className = 'showMessage';

    window.setTimeout(function() {
      newMessage.className = 'hideMessage';

      window.setTimeout(function() {
        Messages.childNodes[Messages.childNodes.length - 1].remove();
      }, 2500);
    }, 10000);

    if (Messages.childNodes.length > 10) {
      Messages.childNodes[10] = 'hideMessage';
      Messages.childNodes[10].style.display = 'none';
    }

    return this;
  }

  render() {
    // let state = store.getState()
    const { isLogin, signup, character, monster } = this.state;
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
                <Battle
                  logout={this.logout}
                  user={character}
                  monster={monster}
                  attackCharacter={this.attackCharacter}
                  generateMonster={this.generateMonster}
                  clearMonster={this.clearMonster}
                  attackMonster={this.attackMonster}
                  heal={this.heal}
                  showMessage={this.showMessage}
                />
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
