import React, { Component } from "react";
import DisplayForm from "./DisplayForm";

export default class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Depart:"",
      Rating:"",
      Clicked: true,
      EmptData: [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.dept]: e.target.value });
    this.setState({ [e.target.Rating]: e.target.value })
  };
  togglefunction = () => {
    this.setState({ Clicked: !this.state.Clicked });
  };
  handleClick = () => {
    const empobj = {
      name: this.state.Name,
      dept: this.state.Depart,
      Rating: this.state.Rating,
    };
    this.state.EmptData.push(empobj);
    this.setState({
      EmptData: this.state.EmptData,
      Name: "",
      Depart:"",
      Rating:"",
      Clicked: !this.state.Clicked,
    });
    console.log(this.state.EmptData);
  };
  render() {
    return (
        <>
      
        <h1> Employee Feedback Form</h1>
        
        {this.state.Clicked ? (
           <center> < div id="content">
          <form>
            <label htmlFor="name">Name : </label>

            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={this.state.Name}
              name="Name"
              onChange={this.handleChange}
            />
           
            <br />
            <label htmlFor="dept">Department : </label>

            <input
              type="text"
              id="dept"
              placeholder="Enter Dept"
              value={this.state.Depart}
              name="Depart"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="Rating">Rating : </label>

            <input
              type="text"
              id="Rating"
              placeholder="Rating"
              value={this.state.Rating}
              name="Rating"
              onChange={this.handleChange}
            />
            <br />
            <button type="button" onClick={this.handleClick}>
              submit
            </button>
          </form>
</div>
</center>

        ) : (
          <DisplayForm
            value={this.state.EmptData}
            togglefunc={this.togglefunction}
          />
        )}
      </>
    );
  }
}
