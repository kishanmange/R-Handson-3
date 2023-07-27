import React, { Component } from "react";

export default class DisplayForm extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.value);
  }
  render() {
    return (
      <div>
        <h1>form data</h1>

        <span  className="Show-data">
        {this.props.value.map((item, index) => {
          return (
            
              <span className="span" key={index}>
                Name : {item.name} || Department : {item.dept} || Rating :
                {item.Rating}
              </span>
           
          );
        })}
         </span>
        <br />
       <center> <button onClick={this.props.togglefunc} > back</button></center>
      </div>
    );
  }
}
