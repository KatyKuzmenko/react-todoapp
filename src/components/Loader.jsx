import React from 'react'

export class Loader extends React.Component {
  render() {
    const { isFetching } = this.props
    return (
      isFetching && (
        <div className='loader'>
          Loading
          <span className='loader-span'></span>
        </div>
      )
    )
  }
}
