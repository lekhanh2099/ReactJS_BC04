import React, { Component } from "react";
//! Cách 1: import đường dẫn css từ file component
// import "./styles.css";
//! Cách 2: import css tại component

import style from "./styles.module.css";
export default class DemoCSS extends Component {
  render() {
    return (
      <div className="container">
        <p className="text-red">Hello</p>
        <p className={`${style["textGreen"]} ${style["bg-dark"]} display-4`}>
          Hello green
        </p>
      </div>
    );
  }
}
