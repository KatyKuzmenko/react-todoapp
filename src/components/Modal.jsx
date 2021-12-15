import React from 'react'

export class Modal extends React.Component {
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
