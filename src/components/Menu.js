import React from 'react';

import PropTypes from 'prop-types';
import store from '../store';

import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: true,
      use: false
      // monster: false
    };
  }

  async nextTurn() {
    const { attackCharacter } = this.props;
    // const { monster } = this.state;
    let { turn } = this.state;
    // const turn = !turn;
    turn = !turn;
    if (!turn) {
      // toggleMenu();
      window.setTimeout(() => {
        console.log('몬스터의 차례입니다.');
        // showMessage(`${monster.name}의 턴입니다.`);

        window.setTimeout(() => {
          attackCharacter();
          // if (user.hp > 0) {
          //   window.setTimeout(function() {
          //     // toggleMenu();
          //     // showMessage('당신의 턴입니다.');
          //   }, 1000);
          // }
          this.setState({
            use: false
          });
        }, 1000);
      }, 1000);
      await this.setState({
        turn: !turn,
        use: true
      });
    }
  }

  quit() {
    const { logout } = this.props;
    if (window.confirm('그만하게습니까?')) {
      // fetch("http://localhost:5001/logout", {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         credentials: 'include',
      //         body: JSON.stringify(this.props.user)
      //     }
      // })
      logout();
    } else {
      return null;
    }
    return null;
  }

  // disable() {}

  render() {
    const state = store.getState();
    const { use } = this.state;
    const { generateMonster, clearMonster, attackMonster, heal } = this.props;

    return (
      <div>
        <div className="menuBar">
          <button
            type="button"
            onClick={() => {
              state.toggleMenu('monster');
              generateMonster();
            }}
          >
            모험한다
          </button>
          <button
            type="button"
            onClick={() => {
              heal();
              // this.nextTurn();
            }}
          >
            휴식한다
          </button>
          <button type="button" onClick={() => this.quit()}>
            그만한다
          </button>
        </div>

        <div className="battleBar">
          <button
            type="button"
            disabled={use}
            onClick={() => {
              this.nextTurn();
              attackMonster();
            }}
          >
            공격한다
          </button>
          <button
            type="button"
            disabled={use}
            onClick={() => {
              heal();
              this.nextTurn();
            }}
          >
            회복한다
          </button>
          <button
            type="button"
            disabled={use}
            onClick={() => {
              clearMonster();
              state.toggleMenu();
            }}
          >
            도망친다
          </button>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  logout: PropTypes.func.isRequired,
  attackCharacter: PropTypes.func.isRequired,
  generateMonster: PropTypes.func.isRequired,
  clearMonster: PropTypes.func.isRequired,
  attackMonster: PropTypes.func.isRequired,
  heal: PropTypes.func.isRequired
};

export default Menu;
