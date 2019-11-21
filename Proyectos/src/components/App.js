import React, { Component } from "react";
import List from "./List";

import "../styles/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { name: "Monday" },
        { name: "Tuesday" },
        { name: "Wednesday" },
        { name: "Thursday" },
        { name: "Friday" },
        { name: "Saturday" },
        { name: "Sunday" }
      ]
    };

    this.createList = this.createList.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  render() {
    return (
      <div>
        <div className={"tdl-main_title-link"}>
          <h1 className="tdl-main_title">GO FOR IT</h1>
        </div>
        <button onClick={this.createList} className="tdl-add_list_button">
          Create new list
        </button>
        <section className="tdl-main-section">
          {this.state.lists.map((list, idx) => (
            <List
              key={idx}
              idx={idx}
              removeList={ev => this.removeList(idx, ev)}
              name={list.name}
            />
          ))}
        </section>
      </div>
    );
  }

  removeList(index) {
    let newArr = [...this.state.lists];
    newArr.splice(index, 1);

    this.setState({
      lists: newArr
    });
  }

  createList() {
    const lists = [...this.state.lists, { name: "New List" }];

    this.setState({
      lists: lists
    });
  }
}
