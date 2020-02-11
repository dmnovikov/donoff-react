import React from 'react';
//import Parser from 'html-react-parser';
import './App.css';

export default class SupplyLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date1: new Date()};
  }

  components = {
    log: '',
    logs:[]
  };
  
  render() {

    if(this.props.data.topic==="log"){
      this.components.log+="<div>>"+this.props.data.message+"</div>";
      this.components.logs.push(this.props.data.message)
      console.log(this.components.logs.length)
   }

   if(this.components.logs.length>4) this.components.logs.shift()

   const dataList = this.components.logs.map((d, i) => <div className="donoff-log-item" key={i}>>{d}</div>)

   


    return (
      <div className="donoff-log">
        <div> LOG:  </div>
        {/* <div className="donoff-log-item"> {Parser(this.components.log)} </div> */}
        
        {dataList}
        
      </div>
    )
}
}

