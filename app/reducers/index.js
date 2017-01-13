import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  routing: routerReducer,
  user: loginReducer
})

export default rootReducer