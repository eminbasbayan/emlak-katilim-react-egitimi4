import useCounter from '../hooks/useCounter';
import Button from './UI/Button';

const Counter = () => {
  const { count, arttir, azalt, reset } = useCounter(10);
  return (
    <div className="counter">
      <p>Sayaç: {count}</p>
      <div className='flex gap-4'>
        <Button onClick={arttir}>Arttır</Button>
        <Button onClick={azalt} color="danger">
          Azalt
        </Button>
        <Button onClick={reset} color="success">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
