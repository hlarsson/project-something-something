import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, SHOW_LOCK } from '../actions/types'

const initialState = {
  authenticating: false,
  authenticated: false,
};

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return Object.assign({}, state, {
        authenticating: true
      })
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        authenticating: false,
        user: action.user,
        token: action.token
      })
    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        authenticating: false
      })
    case SHOW_LOCK:
      return Object.assign({}, state, {
        authenticating: true
      })
    default:
      return state
  }
}