import React, { ReactPropTypes } from 'react';
import { Link } from 'react-router-dom';

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
            // fetch('http://localhost:5001/signup',{
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.state)
            // }).then(()=>{
            //     this.props.signup();
            //   })
            signup();
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

            <button type="submit">로그인</button>
          </div>
        </form>
        <Link to="/login">로그인 하기?</Link>
        <Link to="/ranking">랭킹보기</Link>
        <h4>Team Zemix </h4>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: ReactPropTypes.func.isRequired
};

export default Signup;
