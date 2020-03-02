import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://13.209.6.41:5001/characters/rank', {})
      .then(user => {
        return user.json();
      })
      .then(info => {
        // this.props.login(info);
        console.log(info);
        this.setState({
          data: info
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>캐릭터 랭킹</h2>
        <table>
          <tbody>
            <tr>
              <th>순위</th>
              <th>캐릭터</th>
              <th>레벨</th>
              <th>HP</th>
              <th>공격력</th>
              <th>점수</th>
            </tr>
            {data.map((a, ind) => {
              return (
                <tr key={a.id}>
                  <th>{ind + 1}</th>
                  <th>{a.character_name}</th>
                  <th>{a.level}</th>
                  <th>{a.hp}</th>
                  <th>{a.att}</th>
                  <th>{a.rankScore}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/">뒤로가기</Link>
      </div>
    );
  }
}

export default Ranking;
