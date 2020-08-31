import React, { Component } from "react";
import "./Product.css";
import { Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <p>Halaman Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="https://image.flaticon.com/icons/png/512/126/126083.png"
              alt=""
            />
          </div>
          <div className="troley">
            <img
              src="https://image.flaticon.com/icons/png/512/126/126083.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>

        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
