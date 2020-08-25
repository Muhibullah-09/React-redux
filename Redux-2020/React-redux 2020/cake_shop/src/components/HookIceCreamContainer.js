import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';
function HookIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCreams</button>
        </div>
    )
}

export default HookIceCreamContainer