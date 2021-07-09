import { combineReducers } from 'redux'
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
// import userReducer from './user/userReducer'
import postReducer from './post/postReducer'


const rootReducer = combineReducers({
  // cake: cakeReducer,
  // iceCream: iceCreamReducer,
  // user: userReducer,
  post: postReducer
})

export default rootReducer
