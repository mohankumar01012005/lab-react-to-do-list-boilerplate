import React from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }
  inputChange = (e) => {
    //changing the value of input in  state
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      // if the input is emty string
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
  };

  updateItem = (newItem, index) => {
    // created a copy of my to do list
    let arr = this.state.todoList;

    // to  update the element

    arr.splice(index, 1, newItem);

    // change the state
    this.setState({
      todoList: arr,
    });
  };

  deleteItem = (index) => {
    let arr = this.state.todoList;
    arr.splice(index, 1);

    this.setState({
      todoList: arr,
    });
  };
  componentDidUpdate(){
    console.log(this.state);

  }
  render() {
    let buttonStyle = {
      backgroundColor: "red",
      borderRadius: "25px",
      fontWeight: "bolder",
    };
    return (
      <>
        <h1>TODO LIST</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>A D D</button>
        </form>
        <p>My input : {this.state.input}</p>
        <div className="todoList">
          <h2>⬇️🌟 L I S T 🌟⬇️</h2>

          {this.state.todoList.length == 0 ? ( // conditional rendering
            <h3>List is Emty</h3>
          ) : (
            this.state.todoList.map((e, i) => {
              return <TodoItem
                e={e}
                i={i}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
                style={buttonStyle}
              />;
            })
          )}
        </div>
      </>
    );
  }
}
