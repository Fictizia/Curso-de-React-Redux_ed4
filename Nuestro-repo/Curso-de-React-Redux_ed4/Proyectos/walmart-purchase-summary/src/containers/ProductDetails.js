import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/ProductDetails.css";

class ProductDetails extends Component {
  render() {
    const { cart } = this.props;
    const items = Object.keys(cart);

    return (
      <div>
        {items.map((el, idx) => {
          return (
            <div key={el}>
              <div className="wm-block-details-item">
                <img alt={el} src={cart[el].pictureUrl} />
                <div>
                  <p>{cart[el].description}</p>
                  <div className="wm-block-price-container">
                    <span>${cart[el].price}</span>
                    <p>Qty:{cart[el].quantity}</p>
                  </div>
                </div>
              </div>
              <p className="wm-block-details-selection">
                Actual color: {cart[el].color}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(ProductDetails);
