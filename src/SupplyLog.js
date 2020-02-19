import React from 'react';
//import Parser from 'html-react-parser';
import './App.css';

export default class SupplyLog extends React.Component {

  components = {
    log: '',
    logs:[]
  };
  
  render() {
    // console.log("LOG", this.props.topic_data)
    if(this.props.topic_data.short_topic===process.env.REACT_APP_TOPIC_LOG){
      // this.components.log+="<div>"+ this.props.topic_data.dev  + ">>"+this.props.topic_data.message+"</div>";
      this.components.logs.push(this.props.topic_data.message)
      console.log(this.components.logs)
   }

   if(this.components.logs.length>4) this.components.logs.shift()

   const dataList = this.components.logs.map((d, i) => <div className="donoff-log-item" key={i}>{this.props.topic_data.dev}: {d}</div>)


    return (
      <div className="donoff-log">
        <div> LOG:  </div>
        {/* <div className="donoff-log-item"> {Parser(this.components.log)} </div> */}
        
        {dataList}
        
      </div>
    )
}
}

