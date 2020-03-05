import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">뒤로가기</Link>
      </div>
    );
  }
}

export default About;
