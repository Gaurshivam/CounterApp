import React from 'react';
import { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [data, setData] = useState(0);

    const AddData = () => {
        setData(data+1)
    }
    const DecData = () => {
        setData(data-1)
    }

  return (
    <div className='Container'>
      <h2>Counter App</h2>
      <h3>Count  {data}</h3>
      <button onClick={AddData}>Increment</button>&nbsp;&nbsp;
      <button onClick={DecData}>Decrement</button>
    </div>
  );
}

export default Counter;
