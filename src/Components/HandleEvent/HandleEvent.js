import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello me");
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          id="btnClick"
          onClick={this.handleClick}
        >
          Click me
        </button>
      </div>
    );
  }
}
