import React from 'react';


import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SupplyLog from './SupplyLog';


export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    mqtt.publish('params', message);
  }

  render(){

    //let is_log_topic=0;

    //if(this.props.data.topic==="log") is_log_topic=1;
    return (
      <div>
        <MessageList data={this.props.data} />
        <SupplyLog data={this.props.data} />
        <MessageForm onSubmit={this.addMessage.bind(this)} />
      </div>
    )

  }
}
