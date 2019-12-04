import React from "react";
import OrderSummary from "./OrderSummary";

import "../styles/Body.css";

const Body = () => {
  return (
    <div className="wm-body">
      <div className="wm-block-sign-in">
        <h2>Sign in</h2>
      </div>
      <div className="wm-block-new-user">
        <h2>No account? No problem</h2>
      </div>
      <OrderSummary />
    </div>
  );
};

export default Body;
