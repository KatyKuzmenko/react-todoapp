import React from 'react'
import './styles/style.css'
import { TODOS_INIT, TODO_ADD } from './store/actionTypes'

import { getTodos } from './api/api'
import Loader from './components/Loader'
import Modal from './components/Modal'
import NewTodoInput from './components/NewTodoInput'
import TodoListFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    getTodos()
    .then(todosFromServer => {
      this.props.onInitialize(todosFromServer)
    })
    .catch(err => console.warn(err))
  }

  render() {
    console.log(this.props.store);
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList />
        <TodoListFooter />
        {/* <Modal /> */}
        {/* <Loader /> */}
      </section>
    )
  }
  
}



export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onAdding: (id, title) => {
      dispatch({type: TODO_ADD, options: { id, title }})
    },
    onInitialize: (todos) => {
      dispatch({type: TODOS_INIT, options: todos})
    }
  })
)(App)