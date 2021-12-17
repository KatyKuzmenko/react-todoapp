import React from 'react'
import { connect } from 'react-redux'
import { deleteCompletedTodos } from '../api/api'
import { TODOS_CLEAR_COMPLETED } from '../store/actionTypes'

class TodoListFooter extends React.Component {
  clearCompleted = () => {
    deleteCompletedTodos().then(() => {
      this.props.onClear()
    })
  }

  render() {
    const filterType = 'all'
    const activeTodos = this.props.store.filter((todo) => !todo.iscompleted)
    const completedTodos = this.props.store.filter((todo) => todo.iscompleted)

    return (
      this.props.store.length > 0 && (
        <footer className='footer'>
          <span className='todo-count'>{activeTodos.length} items left</span>
          <ul className='filters'>
            <li>
              <a
                href='#/'
                className={filterType === 'all' ? 'selected' : ''}
              >
                All
              </a>
            </li>
            <li>
              <a
                href='#/active'
                data-filter='active'
                className={filterType === 'active' ? 'selected' : ''}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href='#/completed'
                className={filterType === 'completed' ? 'selected' : ''}
                data-filter='completed'
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

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onClear: () => {
      dispatch({type: TODOS_CLEAR_COMPLETED})
    }
  })
)(TodoListFooter)