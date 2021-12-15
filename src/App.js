import React from 'react'
import { getTodos } from './api/api'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import { NewTodoInput } from './components/NewTodoInput'
import { TodoListFooter } from './components/TodoFooter'
import { TodoList } from './components/TodoList'
import store from './store'
import { initState } from './store/actions'
import './styles/style.css'

class App extends React.Component {
  state = {
    todos: [],
    isFetching: false,
    filterType: 'all',
  }

  componentDidMount() {
    getTodos().then((todosFromServer) => {
      this.setState({ todos: todosFromServer })
      store.dispatch(initState(this.state.todos))
    })
  }

  render() {
    const { todos, isFetching, filterType } = this.state
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList todos={todos} filterType={filterType} />
        <TodoListFooter todos={todos} filterType={filterType} />
        <Modal />
        <Loader isFetching={isFetching} />
      </section>
    )
  }
}

export default App
