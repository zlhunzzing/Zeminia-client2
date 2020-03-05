/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const player = require('../images/playeridle.gif');
    const monsters = {
      쥐: require('../images/ratidle.gif'),
      좀비: require('../images/zombieidle.gif'),
      늑대인간: require('../images/wolfidle.gif'),
      규동몬: require('../images/gyudongmon.gif')
    };

    return (
      <div
        style={{
          // backgroundColor: 'black',
          height: '600px'
        }}
      >
        <br />
        <div
          style={{
            // color: 'white',
            textAlign: 'center'
          }}
        >
          [마왕] 규동몬의 횡포로 세계가 위험에 빠졌습니다. 전설의 제미소드를
          완성하고 규동몬을 처치해주세요!
        </div>
        <h3
          style={{
            // position: 'absolute',
            textAlign: 'center'
          }}
        >
          등장인물 소개
        </h3>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%'
          }}
        >
          <img src={player} alt="" />
          <img src={monsters['쥐']} alt="" />
          <img src={monsters['좀비']} alt="" />
          <img src={monsters['늑대인간']} alt="" />
          <img src={monsters['규동몬']} alt="" />
          <div />
        </div>

        <div
          style={{
            position: 'absolute',
            left: '5%',
            bottom: '5%'
            // color: 'white'
          }}
        >
          제작 : Team Zemix
        </div>
        <Link
          style={{
            // color: 'white',
            position: 'absolute',
            top: '90%',
            left: '85%',
            border: '1px solid black'
          }}
          to="/"
        >
          뒤로가기
        </Link>
      </div>
    );
  }
}

export default About;
