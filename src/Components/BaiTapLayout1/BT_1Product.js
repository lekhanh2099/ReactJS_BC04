import React, { Component } from "react";

export default class BT_1Product extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src="./img/sp_iphoneX.png"
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">iPhone X</h4>
              <p className="card-text">
                iPhone X features a new all-screen design. Face ID, which makes
                your face your password
              </p>
              <a href="#" className="btn btn-primary mx-2">
                Detail
              </a>
              <a href="#" className="btn btn-danger mx-2">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
