import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addAmount = Number(amount) || 0;

  return (
    <div>
      <h1>{count}</h1>
      <form>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(incrementByAmount(addAmount))}>
        Add Amount
      </button>
    </div>
  );
};

export default Counter;
