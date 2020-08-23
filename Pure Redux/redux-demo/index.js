//Here we define react store
const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
/*
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



//Here we can handle multiple states with one reducer
//But it's not a good practice for large applications
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
const BuyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const store = createStore(reducer);
console.log('Initial state', store.getState());
const unSuscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
unSuscribe()


//Best practice is that create multiple state for each task.
//and create reducer of each state and combine them in a single store with the help of "combineReducer functions"
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
const BuyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log('Initial state', store.getState());
const unSuscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
unSuscribe()

*/

//Now we create rootReducer with middleware
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
const BuyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const unSuscribe = store.subscribe(() => { });
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
store.dispatch(BuyIceCream())
unSuscribe()