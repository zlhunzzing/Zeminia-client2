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
      <div
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '5%'
        }}
      >
        <p>Character Status</p>
        {character ? (
          // <div>
          //   <p>{character.character_name}</p>
          //   <p>레 벨 : {character.level}</p>
          //   <p>체 력 : {character.hp}</p>
          //   <p>공격력 : {character.att}</p>
          //   <p>경험치 : {character.exp}</p>
          //   <p>랭킹점수 : {character.rankScore}</p>
          // </div>
          <div>
            <div>캐릭터 : {character.character_name}</div>
            <div>레 벨 : {character.level}</div>
            <div>체 력 : {character.hp}</div>
            <div>공격력 : {character.att}</div>
            <div>경험치 : {character.exp}</div>
            <div>점 수 : {character.rankScore}</div>
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
