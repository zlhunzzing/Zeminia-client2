import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
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
    const { login } = this.props;
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
            // fetch('http://localhost:5001/login',{
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     credentials: 'include',
            //     body: JSON.stringify(this.state)
            // })
            // .then(user=>{
            //     return user.json();
            //   })
            //   .then(info=>{
            //     this.props.login(info);
            //   })
            login();
          }}
        >
          <p>로그인을 해주세요</p>
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

            <button type="submit">로그인</button>
          </div>
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '70px'
          }}
        >
          <Link to="/signup">아이디가 없으신가요?</Link>
          <Link to="/ranking">랭킹보기</Link>
        </div>
        <h4>Team Zemix </h4>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
