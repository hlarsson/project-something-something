import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actions/types'
import { userLoginSuccess, userLoginFailure } from '../actions/creators'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export const loginRequestEpic = action$ => 
    action$.ofType(USER_LOGIN_REQUEST)
        .mergeMap(action =>
            ajax.getJSON('/login')
                .mapTo(userLoginSuccess())
                .catch(error => Observable.of(userLoginFailure(error)))
            );

export const loginSuccessEpic = action$ => 
    action$.ofType(USER_LOGIN_SUCCESS)
        .mapTo(replace('/home'));