import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../api/api'
import { TODO_DELETE } from '../store/actionTypes'

class Modal extends React.Component {
  deleteTodoAndCloseModal = () => {
    this.props.onLoading()
    deleteTodo(this.props.idToRemove)
      .then(() => {
        this.props.onDelete(this.props.idToRemove)
        this.props.handleModal()
        this.props.onLoading()
      })
      .catch((error) => {
        console.warn(error)
      })
  }

  render() {
    return (
      <div className='modal modal--active'>
        <div className='modal__content'>
          <button className='modal__close-button' onClick={() => this.props.handleModal()}></button>
          <p className='modal__title'>Are you sure You want to delete this task?</p>
          <div className='button-container'>
            <button className='modal__button--delete' onClick={this.deleteTodoAndCloseModal}>
              Delete
            </button>
            <button className='modal__button--cancel' onClick={() => this.props.handleModal()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    store: state,
  }),
  (dispatch) => ({
    onDelete: (id) => dispatch({ type: TODO_DELETE, options: { id } }),
  })
)(Modal)
