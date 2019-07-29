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

  userInputChange = e => {
    this.setState({ value: e.target.value });
  };

  updateList = () => {
    let newArray = [...this.state.items];
    newArray.push(this.state.value);
    this.setState({ items: newArray });
    this.setState({ value: "" });
  };

  updateListKey = e => {
    if (e.key === "Enter") {
      let newArray = [...this.state.items];
      newArray.push(this.state.value);
      this.setState({ items: newArray });
      this.setState({ value: "" });
    }
  };

  removeItem = e => {
    let index = e.target.id;
    let newArray = [...this.state.items];
    newArray.splice(index, 1);
    this.setState({ items: newArray });
  };

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
