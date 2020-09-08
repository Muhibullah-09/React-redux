import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, counterUpdate } from '../store/CounterSlice';
function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const { counter, isLoading } = useSelector((state) => {
        console.log(state);
        return {
            counter: state.counter.count,
            isLoading: state.counter.isLoading
        }
    });
    if (isLoading) return <div>Loading....</div>
    return (
        <div >
            <div>Counter: {counter}</div>
            <div>
                <button onClick={() => {
                    dispatch(increment());
                }}>Increment</button>
                <br />
                <button onClick={() => {
                    dispatch(decrement());
                }}>Decrement</button>
            </div>
            <div>
                <input type="text" onChange={(e) => {
                    setValue(e.target.value);
                }} />
                <br />
                <button onClick={() => {
                    dispatch(incrementByAmount(Number(value)))
                }}>Increment By Value</button>
            </div>
            <div>
                <button onClick={() => {
                    dispatch(counterUpdate())
                }}>Increment From Server</button>
            </div>
        </div>
    );
}

export default Counter;