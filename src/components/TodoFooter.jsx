import React from "react";

export class TodoListFooter extends React.Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          items left
        </span>
        <ul class="filters">
          <li>
            <a
              href="#/"
              onclick="todoList.setFilterType('all')"
            >All</a>
          </li>
          <li>
            <a
              href="#/active"
              data-filter="active"
              onclick="todoList.setFilterType('active')"
            >Active</a>
          </li>
          <li>
            <a
              href="#/completed"
              data-filter="completed"
              onclick="todoList.setFilterType('completed')"
            >Completed</a>
          </li>
        </ul>
          <button
            class="clear-completed"
            onclick="todoList.clearCompleted()"
          >
            Clear completed
          </button>
      </footer>
    )
  }
}