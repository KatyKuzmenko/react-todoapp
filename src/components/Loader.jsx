import React from "react";

export class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        Loading
        <span className="loader-span"></span>
      </div>
    )
  }
}