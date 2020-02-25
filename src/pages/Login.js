import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = key => e => {
        this.setState({ [key]: e.target.value})
    }
    render() { 
        return ( 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: '550px'
            }}>
                <h2>Zeminia</h2>
                <form onSubmit={e=>{
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
                    this.props.login()
                }}>
                    <p>로그인을 해주세요</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <label htmlFor="email">이메일</label>
                    <input onChange={this.handleInput('email')} type="text" name="email"></input>
                    <label htmlFor="password">비밀번호</label>
                    <input onChange={this.handleInput('password')} type="text" name="password"></input>
                    <button type="submit">로그인</button>
                    </div>                    
                </form>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '70px'
                }}>
                <Link to="/signup">아이디가 없으신가요?</Link>
                <Link to="/ranking">랭킹보기</Link>
                </div>
                <h4>Team Zemix </h4>
            </div>
         );
    }
}
 
export default Login;