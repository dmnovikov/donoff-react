import React, { Component } from 'react';
import logo from './nearForm-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';
//import  * from as C './const.js';

import _MessageContainer from './MessageContainer.js';
import {subscribe} from 'mqtt-react';

const topics=[
  process.env.REACT_APP_TOPIC_DEMO, 
  process.env.REACT_APP_TOPIC_UPTIME, 
  process.env.REACT_APP_TOPIC_TEMP_INT,
  process.env.REACT_APP_TOPIC_LOG,
  process.env.REACT_APP_TOPIC_INFO
]

//console.log(process.env.REACT_APP_TOPIC_DEMO);

//const topics=["demo", "uptime", "temp_int"];

function CustomDispatcher(topic, message, packet) {
  //const { state } = this;
  //const m = parse(message);
  var m;
  try {
    m = JSON.parse(message);
  } catch (e) {
    m = message.toString();
  }
  //const m=message;
  const newData = {
      message: m,
      topic: topic
      //...state.data
  }
  this.setState({ data: newData });
};


const MessageContainer = subscribe({topic: topics, dispatch: CustomDispatcher})(_MessageContainer);


class App extends Component {
  render() {
    var _mqttProps={   
            host: 'test.mosquitto.org',
            port:8080
            //username: 'username',
            //password: 'password'
        
    }
    return (
      <Connector mqttProps={_mqttProps}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our MQTT-Demo</h2>
        </div>
        <MessageContainer/> 
      </div>
      </Connector>
    );
  }
}

export default App;
