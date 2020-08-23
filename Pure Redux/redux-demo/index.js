//Here we define react store
const redux = require('redux');
const createStore = redux.createStore;


//Here we define Action 
// Note:You can see that we have an action creator 'BuyCake' now you could  by all means 
// pass in the object itself as a parameter to the dispatch method but by having an action creator
// any changes to the action object will happen only one place imagine you pass in just the object to 
// every dispatch method which is called in saveral places in your application after a few days if you
// have to either add a new property or rename a property you would have to do it in all the five or 10 
// different places so better safe than sorry and go with action creators instead of just action
const BUY_CAKE = 'BUY_CAKE';
const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


//Here we define Reducer 
//(preState , action ) => newstate 
const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    //reducer function match the type with switch statements.
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, //here spread operator tells the reducer to first make a copy of state object and then only update number of cakes.
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


//Here we create store
//create store methods accept a parameter which is a reducer function
const store = createStore(reducer);
console.log('Initial state', store.getState());
const unSuscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
unSuscribe()