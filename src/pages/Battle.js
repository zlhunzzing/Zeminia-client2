/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CharacterStat from '../components/CharacterStat';
import Menu from '../components/Menu';
import MonsterStat from '../components/MonsterStat';
import Messages from '../components/Messages';

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
      attackMonster
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
  attackMonster: PropTypes.func.isRequired
};

export default Battle;
