import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import cakeReducer from '../features/cakeShop/counterSlice';


export default configureStore({
  reducer: {
    counter: cakeReducer,
  },
}); 
