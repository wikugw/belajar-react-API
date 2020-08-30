import React from "react";
import { Component } from "react";
import { Fragment } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
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
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardProduct;
