/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

class MonsterStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { monster } = this.props;
    return (
      <div>
        <p>Monster Status</p>
        {monster ? (
          <div>
            <p>{monster.name}</p>
            <p>레 벨 : {monster.level}</p>
            <p>체 력 : {monster.hp}</p>
            <p>공격력 : {monster.att}</p>
            <p>경험치 : {monster.exp}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

MonsterStat.propTypes = {
  // monster: PropTypes.objectOf(PropTypes.object).isRequired
};

export default MonsterStat;
