import React from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../api/api'
import { TODO_EDIT } from '../store/actionTypes'

class Todo extends React.Component {
  state = {
    isEditing: false,
  }
  
  setNewTitle = (title) => {
    this.props.onLoading()
    updateTodo({ ...this.props.todo, title })
      .then((todo) => {
        this.props.onChangeTitle(todo)
        this.props.onLoading()
      })
      .catch((err) => console.warn(err))
    this.setState({ isEditing: false })
  }

  toggleTodo = () => {
    this.props.onLoading()
    updateTodo({ ...this.props.todo, iscompleted: !this.props.todo.iscompleted })
      .then((todo) => {
        this.props.onToggle(todo)
        this.props.onLoading()
      })
      .catch((err) => console.warn(err))
  }

  editTitle = () => {
    this.setState({ isEditing: true })
  }

  setTitleOnEnter = (event) => {
    if (!event.target.value.trim() || event.key !== 'Enter') {
      return
    }
  
    this.setNewTitle(event.target.value.trim())
  }

  setTitleOnBlur = (event) => {
    if (!event.target.value.trim()) {
      return
    }
  
    this.setNewTitle(event.target.value.trim())
  }

  openModalWindow = (id) => {
    this.props.setIdToRemove(id)
    this.props.handleModal()
  }

  render() {
    const { todo } = this.props
    const { isEditing } = this.state
    return (
      <li
        className={todo.iscompleted ? 'todo-list__item completed' : 'todo-list__item'}
        data-todo-id={todo.id}
      >
        {!isEditing && (
          <div className='view'>
            <input
              id={'todo-' + todo.id}
              data-input-id={todo.id}
              className='toggle'
              type='checkbox'
              checked={todo.iscompleted}
              onChange={this.toggleTodo}
            />

            <label className='todo-title' data-label-id={todo.id} onDoubleClick={this.editTitle}>
              {todo.title}
            </label>

            <button
              className='destroy'
              data-destroy-id={todo.id}
              onClick={() => this.openModalWindow(todo.id)}
            ></button>
          </div>
        )}
        {isEditing && (
          <input
            className='edit-field'
            id={todo.id}
            type='text'
            defaultValue={todo.title}
            onKeyDown={this.setTitleOnEnter}
            onBlur={this.setTitleOnBlur}
            autoFocus
          />
        )}
        
      </li>
    )
  }
}

export default connect(
  (state) => ({
    store: state,
  }),
  (dispatch) => ({
    onToggle: (todo) => {
      dispatch({ type: TODO_EDIT, options: todo })
    },
    onChangeTitle: (todo) => {
      dispatch({ type: TODO_EDIT, options: todo })
    },
  })
)(Todo)
