import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { arttir, azalt, reset } from '../redux/slices/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <p>Sayaç: {count}</p>
      <div className="flex gap-4">
        <Button onClick={() => dispatch(arttir())}>Arttır</Button>
        <Button onClick={() => dispatch(azalt())} color="danger">
          Azalt
        </Button>
        <Button onClick={() => dispatch(reset())} color="success">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
