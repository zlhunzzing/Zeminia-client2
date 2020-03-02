/* eslint-disable*/
import React from 'react';
import Chats from '../components/Chats';

class Chatting extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h2>hello~ Chatting</h2>
        <hr />
        <Chats isLogin={this.props.isLogin} />
      </div>
    );
  }
}

export default Chatting;
