/* eslint-disable*/
import React from 'react';
import io from 'socket.io-client';

const hostDev = 'http://localhost:5001';
const hostProd = 'http://13.209.6.41:5001';
let socket = null;

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elTextMessage: '',
      elInputRoomName: '',
      elSelectValue: 'info',
      elInputRoomNameDisplay: 'inline-block',
      elInputRoomNameRequired: true,
      elSpanRefreshText: '',

      // 중복 없는 options 에 방 이름들
      uinqRoomsData: [],

      // 선택한 option 방 이름에 해당하는 데이터들
      selectedRoomData: [
        { id: 1, name: 'zemix', text: 'hi~' },
        { id: 2, name: 'lala', text: 'hello~' }
      ]
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.onChangeSelectOption = this.onChangeSelectOption.bind(this);
    this.onChangeRoomName = this.onChangeRoomName.bind(this);
    this.testSession = this.testSession.bind(this);
  }

  componentDidMount() {
    // socket = io.connect(hostDev, { path: '/socket.io' });
    if (!this.props.isLogin) {
      socket = io.connect(hostDev, { path: '/socket.io' });

      socket.on('messageSuccess', data => {
        console.log(data);
      });

      socket.on('notSession', data => {
        console.log(data);
      });

      socket.on('notCharacter', data => {
        console.log(data);
      });

      socket.on('emptyData', data => {
        console.log(data);
      });
    }
  }

  onChangeSelectOption(e) {
    this.setState({ elSelectValue: e.target.value });
  }

  onChangeMessage(e) {
    this.setState({ elTextMessage: e.target.value });
  }

  onChangeRoomName(e) {
    this.setState({ elInputRoomName: e.target.value });
  }

  sendMessage(selectedValue, roomnameValue, messageValue) {
    if (socket !== null) {
      if (roomnameValue === 'info') {
        alert('죄송합니다, 방 이름으로 info 는 사용할 수 없습니다~');
        return;
      }
      socket.emit('sendMessage', {
        message: messageValue,
        roomname: roomnameValue || selectedValue
      });
    } else {
      console.log('login이 되어 있지 않습니다');
    }
  }

  testSession() {
    fetch(hostDev + '/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: 'sherlock@abc.com',
        password: '123!@#abc'
      }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <h2>Chats Component</h2>
        <button
          onClick={() => {
            this.testSession();
          }}
        >
          테스트를 위한 Session 연결 버튼(로그인)
        </button>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.sendMessage(
              this.state.elSelectValue,
              this.state.elInputRoomName,
              this.state.elTextMessage
            );
          }}
        >
          <fieldset>
            <legend>Chats</legend>
            <div>
              <span>Room: </span>
              <select
                value={this.state.elSelectValue}
                onChange={e => {
                  this.onChangeSelectOption(e);
                }}
              >
                <option value="info">---room을 선택하세요---</option>
                <option value="default">Default</option>
              </select>
              <span className="refresh_Word"></span>
            </div>
            <hr></hr>
            <div>
              <input
                type="text"
                value={this.state.elInputRoomName}
                onChange={e => {
                  this.onChangeRoomName(e);
                }}
                style={{
                  display:
                    this.state.elSelectValue === 'info'
                      ? 'inline-block'
                      : 'none'
                }}
                required={this.state.elSelectValue !== 'info' ? false : true}
                placeholder="방 이름을 적어주세요"
              />
              <br />
              <p>
                <label htmlFor="chats_text">Message</label>
              </p>
              <textarea
                id="chats_text"
                value={this.state.elTextMessage}
                onChange={e => {
                  this.onChangeMessage(e);
                }}
              ></textarea>
            </div>
            <input type="submit" value="전송" />
          </fieldset>
        </form>
        <div>
          {this.state.selectedRoomData
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map(item => {
              return (
                <div key={item.id}>
                  <p>name: {item.name}</p>
                  <p>text: {item.text}</p>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Chats;
