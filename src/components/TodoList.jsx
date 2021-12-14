import React from "react";
import { Todo } from "./Todo";

export class TodoList extends React.Component {
  state = {
    filterType: 'all'
  }

  render() {
    const { todos } = this.props
    const { filterType } = this.state
    const activeTodos = todos.filter(todo => !todo.iscompleted)
    const completedTodos = todos.filter(todo => todo.iscompleted)

    const currentTodos = {
      all: todos,
      active: activeTodos,
      completed: completedTodos
    }

    const visibleTodos = currentTodos[filterType]
    return (
      <section class="main">
        <span class="toggle-all-container">
          <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            checked={activeTodos.length === 0}
            onchange="todoList.toggleAll(event.target.checked)"
          />
          <label for="toggle-all"></label>
          <ul class="todo-list">
            {visibleTodos.map(todo => (
              <Todo key={todo.id} todo={todo}/>
            ))}
          </ul>
        </span>
      </section>
    )
  }
}