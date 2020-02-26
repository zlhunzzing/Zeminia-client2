import React from 'react';

import store from '../store'

import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            turn: true,
            monster: false
        }
    }

    render() { 
        var turn = this.state.turn
        var monster = this.state.monster
        let state = store.getState()
        console.log(state)

        return ( 
            <div>
                <div className="menuBar">
                    <div
                    onClick={()=>{
                        state.toggleMenu("monster")
                    }}
                    >모험하기</div>
                    <div>회복하기</div>
                    <div>도망하기</div>
                </div>
                
                <div className="battleBar">
                    <div>공격하기</div>
                    <div>회복하기</div>
                    <div
                    onClick={()=>{
                        state.toggleMenu()
                    }}
                    >도망하기</div>
                </div>
            </div>     
        );
    }
}
 
export default Menu;