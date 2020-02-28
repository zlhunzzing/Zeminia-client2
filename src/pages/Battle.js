/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CharacterStat from '../components/CharacterStat';
import Menu from '../components/Menu';
import MonsterStat from '../components/MonsterStat';
import Messages from '../components/Log';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { enemes } = this.state;
    const {
      logout,
      user,
      monster,
      attackCharacter,
      generateMonster,
      clearMonster,
      attackMonster,
      heal,
      showLog
    } = this.props;
    return (
      <div>
        <Menu
          logout={logout}
          user={user}
          attackCharacter={attackCharacter}
          generateMonster={generateMonster}
          clearMonster={clearMonster}
          attackMonster={attackMonster}
          heal={heal}
          showLog={showLog}
          monster={monster}
        />
        <MonsterStat monster={monster} />
        <CharacterStat user={user} />
        <Messages />
      </div>
    );
  }
}

Battle.propTypes = {
  logout: PropTypes.func.isRequired,
  // user: PropTypes.objectOf(PropTypes.object).isRequired,
  attackCharacter: PropTypes.func.isRequired,
  attackMonster: PropTypes.func.isRequired,
  heal: PropTypes.func.isRequired
};

export default Battle;
