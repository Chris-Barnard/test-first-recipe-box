import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { value, increment } = this.props;

    return (
      <div className="Counter">
        <p>Counter Value : { value }</p>
        <button onClick={ increment }>Increment</button>
      </div>
    )
  }
}

Counter.PropTypes = {
  value : PropTypes.number.isRequired,
  increment : PropTypes.func.isRequired
}

export default Counter