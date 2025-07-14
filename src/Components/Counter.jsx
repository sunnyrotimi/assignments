import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(Math.max(1, count - 1));
  }
  const resetCount = () => {
    setCount(1);
  }
  return (  
    <div className='counter'>
        <button className='btn-count1' onClick={decreaseCount}>-</button>
        <h2 className='btn-count3'>{count}</h2>
        <button className='btn-count2' onClick={increaseCount}>+</button>
    </div>
  )
}

export default Counter
