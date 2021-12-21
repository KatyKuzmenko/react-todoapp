import React from 'react'
import { connect } from 'react-redux'
import { getTodos, toggleAllTodos } from '../api/api'
import { TODOS_INIT, TODOS_TOGGLE_ALL } from '../store/actionTypes'
import { Loader } from './Loader'
import Todo from './Todo'
import TodoListFooter from './TodoFooter'

class TodoList extends React.Component {
  state = {
    filterType: 'all',
    isLoading: false,
  }

  componentDidMount() {
    this.onLoading()
    getTodos()
      .then((todosFromServer) => {
        this.props.onInitialize(todosFromServer)
        this.onLoading()
      })
      .catch((err) => console.warn(err))
  }

  toggleAll = (event) => {
    this.onLoading()
    toggleAllTodos(event.target.checked)
      .then((todos) => {
        this.props.onToggleAll(todos)
        this.onLoading()
      })
      .catch((err) => console.warn(err))
  }

  onFiltering = (filter) => {
    this.setState({ filterType: filter })
  }

  onLoading = () => {
    this.setState({ isLoading: !this.state.isLoading })
  }

  render() {
    const { filterType, isLoading } = this.state
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
                <Todo todo={todo} key={todo.id} isLoading={isLoading} onLoading={this.onLoading} />
              ))}
            </ul>
          </span>
        </section>
        <TodoListFooter
          filterType={filterType}
          onFiltering={this.onFiltering}
          isLoading={isLoading}
          onLoading={this.onLoading}
        />
        {isLoading && <Loader />}
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
    onInitialize: (todos) => {
      dispatch({ type: TODOS_INIT, options: todos })
    },
  })
)(TodoList)
