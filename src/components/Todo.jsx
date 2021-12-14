import React from "react";

export class Todo extends React.Component {
  render() {
    const { id, title, iscompleted } = this.props.todo

    return (
      <li
        className={iscompleted ? "todo-list__item completed" : "todo-list__item"}
        data-todo-id={id}
      >
        <div className={"view" + id}>
          <input
            id={"todo-" + id}
            className="toggle"
            type="checkbox"
            checked={iscompleted}
          />
          <label>{title}</label>
            
          <button
            className="destroy"
          ></button>
        </div>
        <input
          className="edit-field edit invisible"
          id="todo.id"
          type="text"
          value="todo.title"
        />
      </li>
    )
  }
}