import React, { ReactPropTypes } from 'react';

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
  logout: ReactPropTypes.bool.isRequired
};

export default Menu;
