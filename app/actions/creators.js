import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS
} from './types'

export const userLoginRequest = (username, password) => ({type: USER_LOGIN_REQUEST, username: username, password: password});

export const userLoginSuccess = () => ({type: USER_LOGIN_SUCCESS});