'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initializes count to 0

  //const increment = () => setCount(count + 1); // Increases count by 1
  //const decrement = () => setCount(count - 1); // Decreases count by 1

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
