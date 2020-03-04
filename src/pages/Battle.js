/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import CharacterStat from '../components/CharacterStat';
import MonsterStat from '../components/MonsterStat';
import Log from '../components/Log';
import Chats from '../components/Chats';

import './Battle.css';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      character,
      monster,
      use,
      toggleMenu,
      generateMonster,
      heal,
      moveToShop,
      quit,
      attackMonster,
      nextTurn,
      attackCharacter,
      clearMonster,
      showLog,
      email,
      password
    } = this.props;
    return (
      <div className="Battle">
        <Menu
          character={character}
          monster={monster}
          use={use}
          toggleMenu={toggleMenu}
          generateMonster={generateMonster}
          heal={heal}
          moveToShop={moveToShop}
          quit={quit}
          attackMonster={attackMonster}
          nextTurn={nextTurn}
          attackCharacter={attackCharacter}
          clearMonster={clearMonster}
          showLog={showLog}
        />
        <MonsterStat monster={monster} />
        <CharacterStat character={character} />
        <Log />
        <Chats email={email} password={password} />
      </div>
    );
  }
}

// Battle.propTypes = {
// quit: PropTypes.func.isRequired
// attackCharacter: PropTypes.func.isRequired
// attackMonster: PropTypes.func.isRequired
// heal: PropTypes.func.isRequired
// };

export default Battle;
