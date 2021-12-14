import React from "react";

export class Modal extends React.Component {
  render() {
    return (
      <div class="modal">
        <div class="modal__content">
          <button
            class="modal__close-button"
          >
          </button>
          <p class="modal__title">
            Are you sure You want to delete this task?
          </p>
          <div class="button-container">
            <button
              class="modal__button"
            >Delete</button>
            <button
              class="modal__button"
            >Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
