import React from 'react';
import './App.css';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date1: new Date()};
  }


  components = {
    temp_int: 'none',
    uptime: 'none',
    info: 'none',
    info1: 'none'
  };
  
  render() {

    if(this.props.data.topic===process.env.REACT_APP_TOPIC_TEMP_INT){
      this.components.temp_int=this.props.data.message;
   }

    if(this.props.data.topic===process.env.REACT_APP_TOPIC_UPTIME){
      this.components.uptime=this.props.data.message;  
    }

    if(this.props.data.topic===process.env.REACT_APP_TOPIC_INFO){
      this.components.info=this.props.data.message;  
    }

    console.log(this.props.data.message)

    // var is_content=0;
    
   
    // try{
    //  //const m=;
    //  if(this.props.data.message) is_content=1;
    // }catch (e) {
    //   is_content=-1;
    // }

    // console.log(is_content)


    return (
      <div className="donoff-info">
        <div className="donoff-list">
        <p>Supply info:</p>
        <div> NOW: {this.state.date1.toLocaleTimeString()} </div>
        <div> Uptime: {this.components.uptime} </div>
        <div> Int Temp: {this.components.temp_int} </div>
        <p className="donoff-info-item"> INFO: {this.components.info} </p>
        {/* {content} */}

        </div>
{/* 
      { (is_content === 1) &&
        <h3>Topic {this.props.data.topic}, Message {this.props.data.message}</h3>
      } */}
      </div>
    )
}
}

