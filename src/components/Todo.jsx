import React from 'react'
import { connect } from 'react-redux'
import { updateStatus, updateTodo } from '../api/api'
import { TODO_EDIT, TODO_TOGGLE } from '../store/actionTypes'

class Todo extends React.Component {
  state = {
    isEditing: false
  }

  toggleTodo = (event) => {
    this.props.onToggle(+event.target.dataset.inputId, event.target.checked)
    updateStatus(+event.target.dataset.inputId, event.target.checked)
      .then((todos) => todos)
      .catch((err) => console.warn(err))
  }

  editTitle = () => {
    this.setState({isEditing: true})
  }

  setTitleOnEnter = (event) => {
    if (!event.target.value.trim() || event.key !== 'Enter') {
      return
    }
    this.props.onChangeTitle(+event.target.id, event.target.value)

    updateTodo(+event.target.id, event.target.value)
    .then((todos) => todos)
    .catch((err) => console.warn(err))
    this.setState({isEditing: false})
  }

  setTitleOnBlur = (event) => {
    if (!event.target.value.trim()) {
      return
    }
    this.props.onChangeTitle(+event.target.id, event.target.value)
    updateTodo(+event.target.id, event.target.value)
    .then((todos) => todos)
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

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onToggle: (id, iscompleted) => {
      dispatch({type: TODO_TOGGLE, options: { id, iscompleted }})
    },
    onChangeTitle: (id, title) => {
      dispatch({type: TODO_EDIT, options: { id, title }})
    }
  })
)(Todo)