/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

class CharacterStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { character } = this.props;
    return (
      <div>
        <p>Character Status</p>
        {character ? (
          <div>
            <p>{character.character_name}</p>
            <p>레 벨 : {character.level}</p>
            <p>체 력 : {character.hp}</p>
            <p>공격력 : {character.att}</p>
            <p>경험치 : {character.exp}</p>
            <p>랭킹점수 : {character.rankScore}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

// CharacterStat.propTypes = {
//   character: PropTypes.objectOf(PropTypes.object).isRequired
// };

export default CharacterStat;
