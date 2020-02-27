import React from 'react';
import PropTypes from 'prop-types';

class CharacterStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <p>Character Status</p>
        {user ? (
          <div>
            <p>{user.name}</p>
            <p>레 벨 : {user.level}</p>
            <p>체 력 : {user.maxHp}</p>
            <p>공격력 : {user.power}</p>
            <p>경험치 : {user.exp}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

CharacterStat.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired
};

export default CharacterStat;
