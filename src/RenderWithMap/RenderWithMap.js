import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "Iphone 12 Pro Max",
      price: 3100000,
      img:
        "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
    },
    {
      id: 2,
      name: "S21 Ultra 5G",
      price: 2100000,
      img: "https://www.duchuymobile.com/images/detailed/39/trang_83wh-cd.jpg",
    },
    {
      id: 3,
      name: "ROG Phone 5 Untimed",
      price: 3500000,
      img:
        "https://fdn.gsmarena.com/imgroot/news/21/03/asus-rog-phone-5-what-to-expect/-1200/gsmarena_001.jpg",
    },
  ];

  renderProduct = () => {
    return this.productList.map((product, index) => {
      return (
        <div className="col-md-4">
          <div className="card" key={index}>
            <img
              className="card-img-top"
              src={product.img}
              alt=""
              width="100%"
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  renderProductTable = () => {
    return this.productList.map((product, index) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="" width="50" />
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-white display-4">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>{this.renderProductTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
