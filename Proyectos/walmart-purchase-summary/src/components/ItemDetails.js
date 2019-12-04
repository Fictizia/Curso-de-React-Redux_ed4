import React, { Component } from "react";
import "../styles/ItemDetails.css";

import ProductDetails from "../containers/ProductDetails";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  swapDetails(section) {
    if (!this.state.active) {
      return "See item details +";
    } else {
      return "Hide item details -";
    }
  }

  swapContent() {
    if (this.state.active) {
      return <ProductDetails />;
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <h2
          onClick={this.onToggleTitle.bind(this, this.state.active)}
          className="wm-block-item-details"
        >
          {this.swapDetails()}
        </h2>
        {this.swapContent()}
      </div>
    );
  }

  onToggleTitle(state) {
    let result = !state;

    this.setState({
      active: result
    });
  }
}
