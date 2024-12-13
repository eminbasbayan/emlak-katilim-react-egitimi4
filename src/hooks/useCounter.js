import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const arttir = () => setCount((prevCount) => prevCount + 1);

  const azalt = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(initialValue);

  return { count, arttir, azalt, reset };
};

export default useCounter;
