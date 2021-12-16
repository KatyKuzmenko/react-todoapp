import React from 'react'
import { toggleAllTodos } from '../api/api'
import store from '../store'
import { toggleAll } from '../store/actions'
import { Todo } from './Todo'

export class TodoList extends React.Component {
  state = {
    filterType: 'all',
  }

  componentDidUpdate(prev) {
    if (prev.todos !== this.props.todos) {
      this.forceUpdate()
    }
  }

  toggleAll = (event) => {
    store.dispatch(toggleAll(event.target.checked))
    toggleAllTodos(event.target.checked)
      .then((todos) => todos)
      .catch((err) => console.warn(err))
  }

  render() {
    console.log('todolist')
    const { todos } = this.props
    const { filterType } = this.state
    const activeTodos = todos.filter((todo) => !todo.iscompleted)
    const completedTodos = todos.filter((todo) => todo.iscompleted)

    const currentTodos = {
      all: todos,
      active: activeTodos,
      completed: completedTodos,
    }

    const visibleTodos = currentTodos[filterType]
    return (
      <section className={todos.length > 0 ? 'main' : 'main invisible'}>
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
    )
  }
}
