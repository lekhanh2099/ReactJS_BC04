import React, { Component } from "react";

export default class SanPhamProps extends Component {
  // ! this.props dùng để nhận giá trị truyền vào từ component cha truyền vào
  // ! this.props không thể gán lại gias trị

  render() {
    let product = this.props.item;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={product.img} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
