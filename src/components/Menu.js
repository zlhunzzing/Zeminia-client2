import React from 'react';

import PropTypes from 'prop-types';
import store from '../store';

import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: true,
      monster: false
    };
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

  nextTurn() {
    const { attackCharacter } = this.props;
    const { monster, turn } = this.state;
    // const turn = !turn;
    this.setState({
      turn: !turn
    });
    if (!turn) {
      // toggleMenu();

      // window.setTimeout(function() {
      // showMessage(`${monster.name}의 턴입니다.`);

      window.setTimeout(function() {
        attackCharacter(monster.att);
        // if (user.hp > 0) {
        //   window.setTimeout(function() {
        //     // toggleMenu();
        //     // showMessage('당신의 턴입니다.');
        //   }, 1000);
        // }
      }, 1000);
      // }, 1000);
      this.setState({
        turn: !turn
      });
    }
  }

  async clearMonster() {
    await this.setState({
      monster: false
    });
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

  render() {
    const state = store.getState();

    return (
      <div>
        <div className="menuBar">
          <button
            type="button"
            onClick={() => {
              state.toggleMenu('monster');
              this.generateMonster();
            }}
          >
            모험한다
          </button>
          <div>휴식한다</div>
          <button type="button" onClick={() => this.quit()}>
            그만한다
          </button>
        </div>

        <div className="battleBar">
          <div>공격한다</div>
          <div>회복한다</div>
          <button
            type="button"
            onClick={() => {
              state.toggleMenu();
              this.clearMonster();
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
  attackCharacter: PropTypes.func.isRequired
};

export default Menu;
