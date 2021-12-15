import React from 'react'
import { createTodo } from '../api/api'
import store from '../store'
import { addTodo } from '../store/actions'

export class NewTodoInput extends React.Component {
  addTodo = (event) => {
    if (event.key !== 'Enter' || !event.target.value) {
      return
    }
    createTodo(event.target.value)
      .then((id) => {
        store.dispatch(addTodo(id, event.target.value))
        event.target.value = ''
      })
      .catch((err) => console.warn(err))
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onKeyDown={this.addTodo} 
        />
      </header>
    )
  }
}
