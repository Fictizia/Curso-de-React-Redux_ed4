import React, { Component } from "react";
import "../styles/PromoCode.css";
import PromoForm from "../containers/PromoForm";

export default class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promo: false
    };
  }

  swapPromo() {
    if (!this.state.active) {
      return "Apply promo code +";
    } else {
      return "Hide promo code -";
    }
  }

  swapContent() {
    if (this.state.active) {
      return <PromoForm />;
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <h2
          onClick={this.onTogglePromoSection.bind(this, this.state.active)}
          className="wm-block-promo-code"
        >
          {this.swapPromo()}
        </h2>
        {this.swapContent()}
      </div>
    );
  }

  onTogglePromoSection(state) {
    let result = !state;

    this.setState({
      active: result
    });
  }
}
