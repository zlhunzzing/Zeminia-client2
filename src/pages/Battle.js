import React from 'react';
import CharacterStat from '../components/CharacterStat'

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          enemes: [
            {
              name: '쥐',
              level: 1,
              hp: 15,
              power: 1,
              exp: 1
            },
            {
              name: '좀비',
              level: 3,
              hp: 50,
              power: 3,
              exp: 3
            },
            {
              name: '[Boss]늑대인간',
              level: 10,
              hp: 150,
              power: 10,
              exp: 10
            }
          ] }
    }
    render() { 
        let {user, enemes} = this.state
        return ( 
            <div> 
                <CharacterStat user={this.props.user}></CharacterStat>
            </div>
         );
    }
}
 
export default Battle;