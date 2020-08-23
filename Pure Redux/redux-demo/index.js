//Action defined below
//Here we define a string constant
const BUY_CAKE = 'BUY_CAKE';

const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
//Reducer defined below
//(preState , action ) => newstate 

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {

        }
    }
}