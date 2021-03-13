import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DanhSachSanPham extends Component {
  //! Component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là thẻ component con
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
        <div className="col-md-4" key={index}>
          <SanPhamProps item={product} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
