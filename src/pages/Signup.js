import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    const { signup } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
          height: '550px'
        }}
      >
        <h2>Zeminia</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            const { password } = this.state;
            if (
              password.match(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
              )
            ) {
              fetch('http://13.209.6.41:5001/users/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
              }).then(data => {
                if (data.statusText === 'Conflict') {
                  window.confirm('이미 사용중인 이메일입니다.');
                }
                if (data.statusText === 'OK') {
                  window.confirm('회원가입에 성공했습니다.');
                  signup();
                }
              });
            } else {
              alert('비밀번호가 필요합니다');
            }
          }}
        >
          <p>회원가입을 해주세요</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <label htmlFor="email">
              이메일
              <input
                onChange={this.handleInput('email')}
                type="text"
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              비밀번호
              <input
                onChange={this.handleInput('password')}
                type="text"
                name="password"
                id="password"
              />
            </label>

            <button type="submit">회원가입</button>
          </div>
        </form>
        <Link to="/login">로그인 하기?</Link>
        <Link to="/secession">회원탈퇴</Link>
        <Link to="/ranking">랭킹보기</Link>
        <h4>Team Zemix </h4>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired
};

export default Signup;
