import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from './types'

export const userLoginRequest = (username, password) => ({type: USER_LOGIN_REQUEST, username: username, password: password});
export const userLoginSuccess = () => ({type: USER_LOGIN_SUCCESS});
export const userLoginFailure = (error) => ({type: USER_LOGIN_FAILURE, error: error});