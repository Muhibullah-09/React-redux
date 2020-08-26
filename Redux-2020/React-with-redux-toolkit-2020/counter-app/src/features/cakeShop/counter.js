import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buycake, buynumOfCakes, selectCount } from './counterSlice';

export function Counter() {
    const cakes = useSelector(selectCount);
    const dispatch = useDispatch();
    const [TotalnumOfcakes, setTotalnumOfcakes] = useState('1');

    return (
        <div>
            <button onClick={dispatch(buycake())}>Buy Cake {cakes}</button>
            <input aria-label="Set buy cake number " value={buynumOfCakes} onChange={e => setTotalnumOfcakes(e.target.value)} />
            <button onClick={() => dispatch(setTotalnumOfcakes(Number(TotalnumOfcakes) || 0))}> Add {TotalnumOfcakes} of cakes</button>
        </div>
    )
}