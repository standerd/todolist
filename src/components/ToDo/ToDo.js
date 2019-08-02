import React, { Component } from "react";
import "./ToDo.css";
import ListItem from "../../containers/listItem/listItem";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: "",
      placeholder: "Add a new item to the list"
    };
  }

  //captures what the user has typed in the box.
  userInputChange = e => {
    this.setState({ value: e.target.value });
  };

  // creates a new array to capture the value and then sets the state of the
  // original array to include the new list item. This is passed to the list
  // item container
  updateList = () => {
    let newArray = [...this.state.items];
    newArray.push(this.state.value);
    this.setState({ items: newArray });
    this.setState({ value: "" });
  };

  // listens for the enter key press and then submits the user input
  updateListKey = e => {
    if (e.key === "Enter") {
      let newArray = [...this.state.items];
      newArray.push(this.state.value);
      this.setState({ items: newArray });
      this.setState({ value: "" });
    }
  };

  // removes item from the list on remove click.
  removeItem = e => {
    let index = e.target.id;
    let newArray = [...this.state.items];
    newArray.splice(index, 1);
    this.setState({ items: newArray });
  };

  //sets the focus on the user input
  componentDidMount() {
    this.nameInput.focus();
  }

  componentDidUpdate() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <ListItem items={this.state.items} remove={this.removeItem} />
        <input
          onChange={this.userInputChange}
          type="text"
          active="true"
          onKeyPress={this.updateListKey}
          placeholder={this.state.placeholder}
          value={this.state.value}
          ref={input => {
            this.nameInput = input;
          }}
        />
        <button onClick={this.updateList} className="add">
          Add Item
        </button>
      </div>
    );
  }
}

export default ToDo;
