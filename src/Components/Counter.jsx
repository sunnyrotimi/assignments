import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  
  return (  
    <div>
        <h3>Task 1: Simple Counter Component</h3>
      <div className='counter'><h1>Count: {count}</h1>
        <button onClick={decreaseCount}>Decrease Count</button>        
        <button onClick={increaseCount}>Increase Count</button></div>
    </div>
  )
}

export default Counter

