import React from 'react';
import { Link } from 'react-router-dom';

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
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
                    // fetch('http://localhost:5001/create',{
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
                    //     this.props.createCharacter(info);
                    //   })
                    this.props.createCharacter(this.state.name)
                }}>
                    <p>캐릭터가 없습니다
캐릭터의 이름을 지어주세요</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <input onChange={this.handleInput('name')} type="text"></input>
                    <button type="submit">확인</button>
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
 
export default Character;