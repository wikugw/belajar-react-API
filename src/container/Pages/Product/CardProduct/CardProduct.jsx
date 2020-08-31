import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="img-thumb-prod">
            <img
              src="https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80"
              alt=""
            />
          </div>
          <div className="product-title">Ratatouille</div>
          <div className="product-price">Rp. 410000</div>

          <Counter
            onCounterChange={(value) => this.props.onCounterChange(value)}
          />
        </div>
      </Fragment>
    );
  }
}

export default CardProduct;
