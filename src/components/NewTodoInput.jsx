import React from "react";

export class NewTodoInput extends React.Component {
  render() {
    return (
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          onkeydown="addTodo(event)"
        />
      </header>
    )
  }
}
