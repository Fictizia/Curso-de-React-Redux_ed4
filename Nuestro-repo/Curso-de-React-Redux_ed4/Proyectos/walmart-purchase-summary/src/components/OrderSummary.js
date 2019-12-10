import React, { Component } from "react";

import OrderBreakdown from "../containers/OrderBreakdown";
import ItemDetails from "./ItemDetails";
import PromoCode from "./PromoCode";

import "../styles/OrderSummary.css";

export default class OrderSummary extends Component {
  render() {
    return (
      <section className="wm-block-order-summary">
        <OrderBreakdown />
        <ItemDetails />
        <PromoCode />
      </section>
    );
  }
}
