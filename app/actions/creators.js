import Auth0Lock from 'auth0-lock';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  SHOW_LOCK
} from './types';

const options = {
  auth: {redirectUrl: 'http://localhost:3000/'}
}
const lock = new Auth0Lock('Ct14GkavoCkVLK4YhonYcFaeIb5Kg2Vw', 'hlarsson.eu.auth0.com', options);

export const userLoginRequest = (username, password) => ({type: USER_LOGIN_REQUEST, username, password});
export const userLoginSuccess = (profile, token) => ({type: USER_LOGIN_SUCCESS, user: profile, token});
export const userLoginFailure = error => ({type: USER_LOGIN_FAILURE, error});

export const showLock = dispatch => {
  lock.show();
};
export const logout = () => ({type: USER_LOGOUT});

export function doAuthentication() {
  return dispatch => {
    lock.on('authenticated', function (authResult) {
      console.log('hiiiiii');
      lock.getProfile(authResult.idToken, function (error, profile) {
        console.log('hiiiiii');
        if (error) {
          // handle error
          return dispatch(userLoginFailure(error));
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
        return dispatch(userLoginSuccess(profile, authResult.idToken));
      });
    });
  }
}
