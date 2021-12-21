import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../api/api'
import { TODO_ADD } from '../store/actionTypes'

class NewTodoInput extends React.Component {
  addTodo = (event) => {
    if (event.key !== 'Enter' || !event.target.value) {
      return
    }

    createTodo(event.target.value)
      .then((todo) => {
        this.props.onAdding(todo)
        event.target.value = ''
        this.setState({ isLoading: false })
      })
      .catch((err) => console.warn(err))
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' placeholder='What needs to be done?' onKeyDown={this.addTodo} />
      </header>
    )
  }
}

export default connect(
  (state) => ({
    store: state,
  }),
  (dispatch) => ({
    onAdding: (todo) => {
      dispatch({ type: TODO_ADD, options: todo })
    },
  })
)(NewTodoInput)
