import React from 'react';
import PropTypes from 'prop-types';
import CharacterStat from '../components/CharacterStat';
import Menu from '../components/Menu';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { enemes } = this.state;
    const { logout, user, attackCharacter } = this.props;
    return (
      <div>
        <Menu logout={logout} user={user} attackCharacter={attackCharacter} />
        <CharacterStat user={user} />
      </div>
    );
  }
}

Battle.propTypes = {
  logout: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Battle;
