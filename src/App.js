import React from 'react'
import './styles/style.css'
import { TODOS_INIT, TODO_ADD } from './store/actionTypes'

import { getTodos } from './api/api'
// import Loader from './components/Loader'
// import Modal from './components/Modal'
import NewTodoInput from './components/NewTodoInput'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'

export const RemovalContext = React.createContext({
  todoId: null,
  setIdToDelete: (id) => { this.id = id }
})

class App extends React.Component {
  componentDidMount() {
    getTodos()
      .then((todosFromServer) => {
        this.props.onInitialize(todosFromServer)
      })
      .catch((err) => console.warn(err))
  }

  render() {
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList />
        {/* <Modal /> */}
        {/* <Loader /> */}
      </section>
    )
  }
}

export default connect(
  (state) => ({
    store: state,
  }),
  (dispatch) => ({
    onAdding: (id, title) => {
      dispatch({ type: TODO_ADD, options: { id, title } })
    },
    onInitialize: (todos) => {
      dispatch({ type: TODOS_INIT, options: todos })
    },
  })
)(App)
