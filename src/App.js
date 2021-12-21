import React from 'react'
import './styles/style.css'

import NewTodoInput from './components/NewTodoInput'
import TodoList from './components/TodoList'

class App extends React.Component {
  render() {
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList />
      </section>
    )
  }
}

export default App
