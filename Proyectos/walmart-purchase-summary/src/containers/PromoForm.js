import React, { Component } from "react";
import { connect } from "react-redux";
import { applyDisc } from "../state/discount/action-creators";

import "../styles/PromoForm.css";

class PromoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.updatePrice = this.updatePrice.bind(this)
  }

  render() {
    return (
      <form
        className="wm-form-discount"
        onSubmit={(ev) => this.updatePrice(
          this.state.value,
          this.props.total,
          ev
        )}
      >
        <input
          value={this.state.value}
          onChange={(ev) => this.onInputChange(ev)}
        />
        <button>Apply</button>
      </form>
    );
  }

  onInputChange(ev) {
    let value = ev.target.value;

    this.setState({
      value
    });
  }

  updatePrice(val, total, ev) {
    ev.preventDefault();

    if (val === "DISCOUNT") {
      this.props.applyDisc(total.total);
    }

    this.setState({
      value: ""
    });
  }
}

function mapStateToProps(state) {
  return {
    total: state.discount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyDisc: (total) => dispatch(applyDisc(total))};
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoForm);
