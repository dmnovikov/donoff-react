import React from 'react';
import './App.css';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      is_our_user_dev: 0
    };
  }


  components = {
    temp_int: 'none',
    uptime: 'none',
    info: 'none',
    temp_out: 'none'
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user === nextProps.topic_data.user && nextProps.dev === nextProps.topic_data.dev) {
      this.setState({
        is_our_user_dev:1
      });
    }
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {

    // if (this.props.user === this.props.topic_data.user && this.props.dev === this.props.topic_data.dev){
    //   this.setState({is_our_user_dev:1})
    // }

    //console.log("shtop", this.props.topic_data.short_topic)

    if(this.props.topic_data.short_topic === process.env.REACT_APP_TOPIC_TEMP_INT){
      this.components.temp_int=this.props.topic_data.message
   }

    if(this.props.topic_data.short_topic === process.env.REACT_APP_TOPIC_UPTIME){
      this.components.uptime=this.props.topic_data.message  
    }

    if(this.props.topic_data.short_topic === process.env.REACT_APP_TOPIC_INFO){
      this.components.info=this.props.topic_data.message
    }

    if(this.props.topic_data.short_topic === process.env.REACT_APP_TOPIC_TEMP_OUT){
      this.components.temp_out=this.props.topic_data.message  
    }

    console.log(this.props.topic_data.message)

    // var is_content=0;
    
   
    // try{
    //  //const m=;
    //  if(this.props.data.message) is_content=1;
    // }catch (e) {
    //   is_content=-1;
    // }

    // console.log(is_content)


    return (
       <div>

        {this.state.is_our_user_dev >0 && <div className="donoff-info">
        <div className="donoff-list">
        <p>Supply info:{this.props.user}/{this.props.dev}</p>
        <div> NOW: {this.state.date.toLocaleTimeString()} </div>
        <div> Uptime: {this.components.uptime} </div>
        <div> Int Temp: {this.components.temp_int} </div>
        <div> Out Temp: {this.components.temp_out} </div>
        <p className="donoff-info-item"> INFO: {this.components.info} </p>
        
        </div>
        </div>}

        {this.state.is_our_user_dev == 0 && <div className="donoff-info">
        <div className="donoff-list">
        <p>Supply info:{this.props.user}/{this.props.dev}</p>
        <div> No incoming data :( </div>
        
        </div>
        </div>}

      </div>
    )
}
}

