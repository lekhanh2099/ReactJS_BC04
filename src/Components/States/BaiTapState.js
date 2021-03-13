import React, { Component } from "react";

export default class BaiTapState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "./img/car/products/black-car.jpg",
    };
  }
  changeColor = (color) => {
    let imgSrc = "";
    // Choose color
    switch (color) {
      case "red":
        {
          imgSrc = "./img/car/products/red-car.jpg";
        }
        break;
      case "black":
        {
          imgSrc = "./img/car/products/black-car.jpg";
        }
        break;
      case "silvier":
        {
          imgSrc = "./img/car/products/silver-car.jpg";
        }
        break;
    }
    // Gọi lại hàm setState()  để lưu và render lại ảnh
    this.setState({
      imgUrl: imgSrc,
    } () => {
      console.log(this.imgUrl)
    });
  };
  render() {
    const styleColorBtn = {
      color: "#fff",
    };
    return (
      <div className="container">
        <h1 className="display-4 bg-dark text-white text-center">
          Bài Tập chọn xe
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img src={this.state.imgUrl} alt="" className="w-100 h-100" />
          </div>
          <div className="col-md-6">
            <h3>Change your car color</h3>
            <button
              onClick={() => this.changeColor("red")}
              className="btn btn-danger m-2"
              style={styleColorBtn}
            >
              Red car
            </button>
            <button
              onClick={() => this.changeColor("black")}
              className="btn btn-dark m-2"
              style={styleColorBtn}
            >
              Black car
            </button>
            <button
              onClick={() => this.changeColor("silvier")}
              className="btn m-2"
              style={{ color: "#fff", backgroundColor: "#b3b3b3" }}
            >
              Silver car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
