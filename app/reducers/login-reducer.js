import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    authenticating: false,
    authenticated: false,
};

export default function loginReducer(state = { }, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
        return Object.assign({}, state, {
            authenticating: true
        })
      case USER_LOGIN_SUCCESS:
        return Object.assign({}, state, {
            authenticated: true,
            authenticating: false
        })
    default:
      return state
  }
}