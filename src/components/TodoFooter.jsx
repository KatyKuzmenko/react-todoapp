import React from 'react'
import { deleteCompletedTodos } from '../api/api'
import store from '../store'
import { clearTodos } from '../store/actions'

export class TodoListFooter extends React.Component {
  setFilter = (type) => {
  }

  clearCompleted = () => {
    deleteCompletedTodos().then(() => {
      store.dispatch(clearTodos())
    })
  }

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
                onClick={this.setFilter('all')}
              >
                All
              </a>
            </li>
            <li>
              <a
                href='#/active'
                data-filter='active'
                className={filterType === 'active' ? 'selected' : ''}
                onClick={this.setFilter('active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href='#/completed'
                className={filterType === 'completed' ? 'selected' : ''}
                data-filter='completed'
                onClick={this.setFilter('completed')}
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
