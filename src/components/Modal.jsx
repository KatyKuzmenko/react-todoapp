import React from 'react'
import { deleteTodo } from '../api/api'
import store from '../store'
import { removeTodo } from '../store/actions'

export class Modal extends React.Component {
  deleteTodoAndCloseModal = () => {
    deleteTodo()
      .then(() => {
        store.dispatch(removeTodo())
      })
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div className='modal'>
        <div className='modal__content'>
          <button className='modal__close-button'></button>
          <p className='modal__title'>Are you sure You want to delete this task?</p>
          <div className='button-container'>
            <button className='modal__button'>Delete</button>
            <button className='modal__button'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
