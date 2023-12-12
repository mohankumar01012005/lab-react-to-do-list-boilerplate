import { Component } from "react";
import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { e, i, updateItem, deleteItem,style } = this.props;
    return (
      <div key={i}>
        <input
          type="text"
          value={e}
          onChange={(event) => {
            updateItem(event.target.value, i);
          }}
        />
        <button
          style={style}
          onClick={() => {
            deleteItem(i);
          }}
        >
          D E L E T E
        </button>
      </div>
    );
  }
}
