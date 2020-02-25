import React from 'react';

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="menu">
                    <div>모험한다</div>
                    <div>휴식한다</div>
                    <div>그만한다</div>
                </div>
            </div>
         );
    }
}
 
export default Battle;