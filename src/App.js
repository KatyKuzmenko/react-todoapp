import React from 'react'
import './styles/style.css'

// import Loader from './components/Loader'
// import Modal from './components/Modal'
import NewTodoInput from './components/NewTodoInput'
import TodoList from './components/TodoList'

class App extends React.Component {
  render() {
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList />
        {/* <Modal /> */}
      </section>
    )
  }
}

export default App
