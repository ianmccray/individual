import React, { Component } from "react";

export default class Display extends Component {
    render() {
      const { contract } = this.props;
      const { name, company, details } = contract;
      return (
        <div>
          <h3> Name: </h3>
          <p> {name} </p>
  
          <h3> Company: </h3>
          <p> {company} </p>
  
          <h3> Details: </h3>
          <p> {details} </p>
        </div>
      );
    }
  }