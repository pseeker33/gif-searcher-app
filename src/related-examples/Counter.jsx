// Ejemplo, counter basico usando useState

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Add 1</button>
    </div>
  );
}




