import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { calcTotal } from "../state/discount/action-creators";

import "../styles/OrderBreakdown.css";

class OrderBreakdown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      subtotal: 0,
      taxes: 0,
      total: 0,
      savings: 3.85,
      tooltipVisible: false
    };
  }

  componentDidMount() {
    const { cart } = this.props;
    this.calcSubtotal({ cart });
  }

  render() {
    const { subtotal, savings, taxes, tooltipVisible } = this.state;
    const { total } = this.props;

    return (
      <div
        className="wm-order-summary-breackdown"
        ref={node => {
          this.node = node;
        }}
      >
        <div>
          <span className="wm-order-summary-breackdown-title">Subtotal</span>
          <span className="wm-order-summary-result">{`$${subtotal}`}</span>
        </div>
        <div>
          <span
            onClick={this.handleClick}
            className="wm-order-summary-breackdown-title wm-order-summary-breackdown-title_clickable"
          >
            Pickup savings
          </span>
          {tooltipVisible && (
            <div className="wm-order-summary-tooltip">
              Picking up your order in the store helps cuts costs and we pass
              savings to you
            </div>
          )}
          <span className="wm-order-summary-result">{`$${savings}`}</span>
        </div>
        <div>
          <span className="wm-order-summary-breackdown-title">
            Est. taxes &amp; fees<br />
            {`(Based on 94083)`}
          </span>
          <span className="wm-order-summary-result">{`$${taxes}`}</span>
        </div>
        <div className="wm-order-summary-total">
          <span className="wm-order-summary-breackdown_total">Est. total</span>
          <span className="wm-order-summary-result">{`$${total.total}`}</span>
        </div>
      </div>
    );
  }

  calcSubtotal(cart) {
    let arr = Object.keys(cart.cart);
    let pricesArr = arr.map((el, idx) => {
      return cart.cart[el].price;
    });
    let subtotal = pricesArr.reduce((tot, nextEl) => tot + nextEl);
    this.calcTaxes(subtotal);

    this.setState({
      subtotal
    });
  }

  calcTaxes(subtotal) {
    let taxes = subtotal * 0.08;
    taxes = taxes.toFixed(2);
    taxes = parseFloat(taxes);

    this.calcTotal(subtotal, taxes);

    this.setState({ taxes });
  }

  calcTotal(subtotal, taxes) {
    let total = subtotal + taxes - 3.85;
    this.props.calcTotal(total);
    this.setState({ total });
  }

  handleClick() {
    if (!this.state.tooltipVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      tooltipVisible: !prevState.tooltipVisible
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    total: state.discount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calcTotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBreakdown);
