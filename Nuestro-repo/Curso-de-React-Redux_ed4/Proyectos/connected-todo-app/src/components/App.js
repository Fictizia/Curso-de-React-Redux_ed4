import React, { Component } from 'react';
import Header from './Header';
import List from './List';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return(
      <>
        <Header/>
        <button onClick={this.createList.bind(this)} className="tdl-add_list_button">Create new list</button>
        <section className="tdl-main-section">
          {this.state.lists.map((list, idx, lists) => (
            <List
              newListName={() => this.newListName(idx)}
              submitName={this.submitName}
              changeListName={() => this.changeListName(idx)}
            >
              {list}
            </List>
          ))}
        </section>
      </>
  )};

  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }

    this.changeListName = this.changeListName.bind(this);
  }

  changeListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = "";

    this.setState({
      lists: newArr
    });
  }

  newListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = event.target.value;

    this.setState({
      lists: newArr
    });
  }

  submitName = (event) => {
    if(event.keyCode === 13){ event.target.blur() }
  }

  createList(event) {
    const newArr = this.state.lists.slice(0);
    newArr.push("New List")

    this.setState({
      lists: newArr
    });
  }
}
