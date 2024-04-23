import React from "react";
import "./App.css";
import TodoItem from "./todoitem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0) {
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
    }
  };

  deleteItem = (index) => {
    let updatedList = [...this.state.todoList];
    updatedList.splice(index, 1);
    this.setState({
      todoList: updatedList,
    });
  };

  updateItem = (newItem, index) => {
    let updatedList = [...this.state.todoList];
    updatedList[index] = newItem;
    this.setState({
      todoList: updatedList,
    });
  };

  render() {
    return (
      <>
        <h1> TO DO LIST </h1>
        <form action="" onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button className="shine-btn">ADD</button>
        </form>
        <p>{this.state.input}</p>
        <div className="todoList">
          <h2> YOUR'S  LIST </h2>
          {this.state.todoList.length === 0 ? (
            <h3>The list is empty. Please make a list!</h3>
          ) : (
            this.state.todoList.map((e, i) => (
              <TodoItem
                key={i}
                e={e}
                index={i}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
              />
            ))
          )}
        </div>
      </>
    );
  }
}
