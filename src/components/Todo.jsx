import React from 'react'
import { updateStatus, updateTodo } from '../api/api'
import store from '../store'
import { editTitle, toggleTodo } from '../store/actions'

export class Todo extends React.Component {
  state = {
    isEditing: false
  }

  toggleTodo = (event) => {
    updateStatus(+event.target.dataset.inputId, event.target.checked)
      .then(() => {
        store.dispatch(toggleTodo(+event.target.dataset.inputId, event.target.checked))
      })
      .catch((err) => console.warn(err))
  }

  editTitle = () => {
    this.setState({isEditing: true})
  }

  setTitleOnEnter = (event) => {
    if (!event.target.value.trim() || event.key !== 'Enter') {
      return
    }
    updateTodo(+event.target.id, event.target.value)
    .then(() => {
      store.dispatch(editTitle(+event.target.id, event.target.value))
    })
    .catch((err) => console.warn(err))
    this.setState({isEditing: false})
  }

  setTitleOnBlur = (event) => {
    if (!event.target.value.trim()) {
      return
    }
    updateTodo(+event.target.id, event.target.value)
    .then(() => {
      store.dispatch(editTitle(+event.target.id, event.target.value))
    })
    .catch((err) => console.warn(err))
    this.setState({isEditing: false})
  }

  openModalWindow = () => {}

  render() {
    const { id, title, iscompleted } = this.props.todo
    const { isEditing } = this.state
    return (
      <li
        className={iscompleted ? 'todo-list__item completed' : 'todo-list__item'}
        data-todo-id={id}
      >
        <div className={isEditing ? 'invisible view' + id : 'view' + id}>
          <input
            id={'todo-' + id}
            data-input-id={id}
            className='toggle'
            type='checkbox'
            checked={iscompleted}
            onChange={this.toggleTodo}
          />

          <label
            className='todo-title'
            data-label-id={id}
            onDoubleClick={this.editTitle}>
            {title}
          </label>

          <button className='destroy' data-destroy-id={id} onClick={this.openModalWindow}></button>
        </div>

        <input
          className={isEditing ? 'edit-field edit' + id : 'edit-field invisible edit' + id}
          id={id}
          type='text'
          defaultValue={title}
          onKeyDown={this.setTitleOnEnter}
          onBlur={this.setTitleOnBlur}
        />
      </li>
    )
  }
}
