import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((current) => {
      return current + 1;
    });
  };

  const decrement = () => {
    setCount((current) => {
      return current - 1;
    });
  };

  return (
    <div>
      <button data-testid="increment" onClick={increment}>Increment</button>
      <button data-testid="decrement" onClick={decrement}>Decrement</button>
      <div data-testid="counter-value" >{count}</div>
    </div>

  );
};

export default Counter;
