import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { e, index, updateItem, deleteItem } = this.props;
    return (
      <div>
        <input
          type="text"
          value={e}
          onChange={(event) => {
            updateItem(event.target.value, index);
          }}
        />
        <button
          className="shine-btn"
          onClick={() => {
            deleteItem(index);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }
}
