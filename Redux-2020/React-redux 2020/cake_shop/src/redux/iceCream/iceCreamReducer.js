import { BUY_ICECREAM } from './iceCreamTypes';
const initialState = {
    numOfIceCreams: 10
}
const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}
export default iceCreamReducer