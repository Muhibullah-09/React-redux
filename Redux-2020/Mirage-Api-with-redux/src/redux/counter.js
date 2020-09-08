import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from './counterSlice';

export function Counter() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state);
        return state.counter.count
    });
    return (
        <div>
            <div>Counter : {counter}</div>
            <div>
                <button onClick={dispatch(increment())}>Increament</button>
            </div>
            <div>
                <button onClick={dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <input type='text' onChange={(e) => {
                    setValue(e.target.value);
                }} />
            </div>
            <div>
                <button onClick={() => { dispatch(incrementByValue(Number(value))) }}>Increment By Value </button>
            </div>
        </div>
    )
}