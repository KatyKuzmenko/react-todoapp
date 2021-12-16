import React from 'react'
import { getTodos } from './api/api'
// import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import { NewTodoInput } from './components/NewTodoInput'
import { TodoListFooter } from './components/TodoFooter'
import { TodoList } from './components/TodoList'
import store from './store'
import { initState } from './store/actions'
import './styles/style.css'

class App extends React.Component {
  state = {
    todos: []
  }
  
  componentDidMount() {
    this.setTodos()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      this.setTodos()
    }
  }

  setTodos = () => {
    getTodos().then((todosFromServer) => {
      this.setState({ todos: todosFromServer })
    })
  }

  render() {
    const { todos } = this.state
    return (
      <section className='todoapp'>
        <NewTodoInput />
        <TodoList todos={todos} />
        <TodoListFooter todos={todos} />
        <Modal />
        {/* <Loader /> */}
      </section>
    )
  }
}

export default App
