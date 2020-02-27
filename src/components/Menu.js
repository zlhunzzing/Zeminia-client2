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
    console.log('몬스터', this.state.monster);
  }

  async clearMonster() {
    await this.setState({
      monster: false
    });
    console.log('몬스터', this.state.monster);
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
    const { turn } = this.state;
    const { monster } = this.state;
    const state = store.getState();

    return (
      <div>
        <div className="menuBar">
          <div
            onClick={() => {
              state.toggleMenu('monster');
              this.generateMonster();
            }}
          >
            모험한다
          </div>
          <div>휴식한다</div>
          <div onClick={() => this.quit()}>그만한다</div>
        </div>

        <div className="battleBar">
          <div>공격한다</div>
          <div>회복한다</div>
          <div
            onClick={() => {
              state.toggleMenu();
              this.clearMonster();
            }}
          >
            도망친다
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  logout: PropTypes.bool.isRequired
};

export default Menu;
