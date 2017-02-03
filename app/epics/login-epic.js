import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actions/types'
import { userLoginSuccess, userLoginFailure } from '../actions/creators'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

function loginRequest(username, password) {
  const settings = {
    url: '/login',
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${username}&passowrd=${password}`
  };

  return ajax(settings);
}

export const loginRequestEpic = action$ =>
    action$.ofType(USER_LOGIN_REQUEST)
        .mergeMap(action =>
          loginRequest(action.username, action.password)
                .map(user => userLoginSuccess(user))
                .catch(error => Observable.of(userLoginFailure(error)))
            );

export const loginSuccessEpic = action$ => 
    action$.ofType(USER_LOGIN_SUCCESS)
        .mapTo(replace('/'));
