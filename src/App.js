import React from 'react';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { NewTodoInput } from './components/NewTodoInput';
import { TodoListFooter } from './components/TodoFooter';
import { TodoList } from './components/TodoList';
import './styles/style.css';

class App extends React.Component {
  state = {
    todos: [{id: 1, title: 'dssdds', iscompleted: true}]
  }

  render() {
    const { todos } = this.state
    return (
      <section class="todoapp">  
        <NewTodoInput />
        <TodoList todos={todos}/>
        <TodoListFooter />
        <Modal />
        <Loader />
      </section>
    )
  }
}

export default App
