import React from 'react'

export class TodoListFooter extends React.Component {
  setFilter = () => {}

  clearCompleted = () => {}

  render() {
    const { todos, filterType } = this.props
    const activeTodos = todos.filter((todo) => !todo.iscompleted)
    const completedTodos = todos.filter((todo) => todo.iscompleted)

    return (
      todos.length > 0 && (
        <footer className='footer'>
          <span className='todo-count'>{activeTodos.length} items left</span>
          <ul className='filters'>
            <li>
              <a
                href='#/'
                className={filterType === 'all' ? 'selected' : ''}
                onClick={this.setFilter}
              >
                All
              </a>
            </li>
            <li>
              <a
                href='#/active'
                data-filter='active'
                className={filterType === 'active' ? 'selected' : ''}
                onClick={this.setFilter}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href='#/completed'
                className={filterType === 'completed' ? 'selected' : ''}
                data-filter='completed'
                onClick={this.setFilter}
              >
                Completed
              </a>
            </li>
          </ul>
          {completedTodos.length > 0 && (
            <button className='clear-completed' onClick={this.clearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      )
    )
  }
}
