import React from 'react';


import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SupplyLog from './SupplyLog';


export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    const topic='/'+this.topic_data.user+'/'+this.topic_data.dev+'/in/params'
    //console.log("params topic", topic)
    mqtt.publish(topic, message);
  }

  topic_data={
    user: '',
    dev:'',
    direction:'',
    short_topic:'',
    message:''
  };

  render(){

    if(this.props.data.topic) {
      [,
        this.topic_data.user,
        this.topic_data.dev,
        this.topic_data.direction,
        this.topic_data.short_topic
      ]=this.props.data.topic.split('/')

      this.topic_data.message=this.props.data.message
      
    }

  
    // console.log("topic", this.props.data.topic)
    console.log("topic_data", this.topic_data)
    // console.log("shtop", this.topic_data.short_topic)

    //let is_log_topic=0;

    //if(this.props.data.topic==="log") is_log_topic=1;
    return (
      <div>
        <MessageList  user="gleb" dev="w2" topic_data={this.topic_data} />
        <MessageList  user="gleb" dev="w1" topic_data={this.topic_data} />
        <SupplyLog topic_data={this.topic_data}/>
        <MessageForm onSubmit={this.addMessage.bind(this)} />
      </div>
    )

  }
}
