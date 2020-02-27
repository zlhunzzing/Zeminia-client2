import React, { ReactPropTypes } from 'react';
import CharacterStat from '../components/CharacterStat';

import Menu from '../components/Menu';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { enemes } = this.state;
    const { logout, user } = this.props;
    return (
      <div>
        <Menu logout={logout} user={user} />
        <CharacterStat user={user} />
      </div>
    );
  }
}

Battle.propTypes = {
  logout: ReactPropTypes.bool.isRequired,
  user: ReactPropTypes.objectOf(ReactPropTypes.object()).isRequired
};

export default Battle;
