import React from 'react'
import { connect } from 'react-redux'
import { toggleAllTodos } from '../api/api'
import { TODOS_TOGGLE_ALL } from '../store/actionTypes'
import Todo from './Todo'
import TodoListFooter from './TodoFooter'

class TodoList extends React.Component {
  state = {
    filterType: 'all',
  }

  toggleAll = (event) => {
    toggleAllTodos(event.target.checked)
      .then((todos) => {
        this.props.onToggleAll(todos)
      })
      .catch((err) => console.warn(err))
  }

  onFiltering = (filter) => {
    this.setState({filterType: filter})
  }

  render() {
    const { filterType } = this.state
    const activeTodos = this.props.store.filter((todo) => !todo.iscompleted)
    const completedTodos = this.props.store.filter((todo) => todo.iscompleted)

    const currentTodos = {
      all: this.props.store,
      active: activeTodos,
      completed: completedTodos,
    }

    const visibleTodos = currentTodos[filterType]
    return (
      <>
        <section className={this.props.store.length > 0 ? 'main' : 'main invisible'}>
          <span className='toggle-all-container'>
            <input
              id='toggle-all'
              className='toggle-all'
              type='checkbox'
              checked={activeTodos.length === 0}
              onChange={this.toggleAll}
            />
            <label htmlFor='toggle-all'></label>
            <ul className='todo-list'>
              {visibleTodos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
              ))}
            </ul>
          </span>
        </section>
        <TodoListFooter filterType={filterType} onFiltering={this.onFiltering} />
      </>
    )
  }
}

export default connect(
  (state) => ({
    store: state,
  }),
  (dispatch) => ({
    onToggleAll: (iscompleted) => {
      dispatch({ type: TODOS_TOGGLE_ALL, options: { iscompleted } })
    },
  })
)(TodoList)
