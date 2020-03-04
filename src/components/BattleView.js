/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
const player = require('../images/playeridle.gif');
const playerAttack = require('../images/playerattack.gif');

const monsters = {
  쥐: require('../images/ratidle.gif'),
  좀비: require('../images/zombieidle.gif'),
  늑대인간: require('../images/wolfidle.gif'),
  규동몬: require('../images/wolfidle.gif')
};

const monstersAttack = {
  mouse: require('../images/ratattack.png'),
  zombie: require('../images/zombieattack.png'),
  늑대인간: require('../images/wolfattack.png'),
  규동몬: require('../images/wolfattack.png')
};

class BattleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { battle, monster, characterAttack, monsterAttack } = this.props;
    const imgStyle = {
      padding: '20px'
    };
    return (
      <div
        style={{
          position: 'absolute',
          right: '50%',
          bottom: '30%',
          width: 'auto'
        }}
      >
        {battle && monsterAttack ? (
          <img
            style={imgStyle}
            src={monstersAttack[monster.monster_name]}
            alt=""
          />
        ) : (
          <img style={imgStyle} src={monsters[monster.monster_name]} alt="" />
        )}
        {battle && characterAttack ? (
          <img style={imgStyle} src={playerAttack} alt="" />
        ) : (
          <img style={imgStyle} src={player} alt="" />
        )}
      </div>
    );
  }
}

export default BattleView;
