import React, { Component } from "react";

import "../styles/List.css";

// import Task from "./Task";

export default class List extends Component {
  render() {
    const { value = this.props.name, removeList = () => {}, idx } = this.props;

    return (
      <div className="td-list_container">
        <div>{value}</div>
        <div className="td-list_add_task_box">
          <button onClick={() => removeList(idx)} className="td-list_add_cta">
            Remove this task
          </button>
        </div>
      </div>
    );
  }
}
