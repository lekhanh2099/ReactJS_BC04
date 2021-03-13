import React, { Component } from "react";

export default class Databinding extends Component {
  // ! Databinding là cơ chế hiện thị dữ liệu lên thành phần giao diện
  // TODO: Tạo 1 thuộc tính

  renderStudent = () => {
    let students = {
      id: 1,
      name: "Lê Duy Khánh",
      img: "https://picsum.photos/100/100",
    };
    return (
      <div className="card text-left">
        <img className="card-img-top" src={students.img} alt="" />
        <div className="card-body">
          <h4 className="card-title">{students.name}</h4>
          <p className="card-text">{students.id}</p>
        </div>
      </div>
    );
  };

  render() {
    let product = {
      id: 1,
      name: "Xperia X",
      price: 230000,
      img: "https://picsum.photos/100/100",
    };
    let renderProduct = () => {
      //! Khi nội dung return về component thì phải được bao lại bằng 1 thẻ
      return (
        <div>
          <p className="text-center">{product.name}</p>
        </div>
      );
    };
    return (
      <div>
        {this.renderStudent()}
        <div className="w-25 mx-auto">
          <ul>
            {/* <li>Mã số sinh viên: {this.students.id}</li>
            <li>Tên sinh viên: {this.students.name}</li> */}
          </ul>
        </div>
        <div className="card text-left w-25 mx-auto">
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
