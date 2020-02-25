import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {rank: 1, name: 'first', level: 100, hp: 1000, att: 1000, score: 100000000},
                {rank: 2, name: 'second', level: 99, hp: 900, att: 900, score: 10000000},
                {rank: 3, name: 'third', level: 88, hp: 800, att: 800, score: 10000000},
                {rank: 4, name: 'fourth', level: 77, hp: 700, att: 700, score: 1000000},
                {rank: 5, name: 'fifth', level: 66, hp: 600, att: 600, score: 100000},
                {rank: 6, name: 'sixth', level: 55, hp: 500, att: 500, score: 10000},
                {rank: 7, name: 'seventh', level: 44, hp: 400, att: 400, score: 1000},
                {rank: 8, name: 'eigth', level: 33, hp: 300, att: 300, score: 1000},
                {rank: 9, name: 'nineth', level: 22, hp: 200, att: 200, score: 100},
                {rank: 10, name: 'tenth', level: 10, hp: 100, att: 100, score: 10}
            ]
        }
    }
    render() { 
        return ( 
            <div>
                <h2>캐릭터 랭킹</h2>
                <table> 
                <tr>
                        <th>
                        순위
                        </th>
                        <th>
                        캐릭터
                        </th>
                        <th>
                        레벨
                        </th>
                        <th>
                        HP
                        </th>
                        <th>
                        공격력
                        </th>
                        <th>
                        점수
                        </th>
                    </tr>                   
                    {this.state.data.map(a=>{
                        return <tr>
                        <th>
                        {a.rank}
                        </th>
                        <th>
                        {a.name}
                        </th>
                        <th>
                        {a.level}
                        </th>
                        <th>
                        {a.hp}
                        </th>
                        <th>
                        {a.att}
                        </th>
                        <th>
                        {a.score}
                        </th>      
                        </tr>                                      
                    })}
                </table>
                <Link to='/'>뒤로가기</Link>
            </div>
         );
    }
}
 
export default Ranking;