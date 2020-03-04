import React from 'react';
import { Link } from 'react-router-dom';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Shop">
        <div>단검</div>
        <div>도끼</div>
        <div>롱소드</div>
        <div>창</div>
        <div>제미소드</div>
        <Link to="/battle">나가기</Link>
      </div>
    );
  }
}

export default Shop;
