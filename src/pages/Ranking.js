import React from 'react';

class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                </table>
                <button>뒤로가기</button>
            </div>
         );
    }
}
 
export default Ranking;