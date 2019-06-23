import React from 'react'

// 计数器 + -
class Counter extends React.Component {
  
  render() {
    const {value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
        </div>
        <p> { value } </p>
        
        <div>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;