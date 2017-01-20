import { USER_LOGIN_REQUEST } from '../actions/types'
import { userLoginSuccess, userLoginFailure } from '../actions/creators'
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export default action$ => 
    action$.ofType(USER_LOGIN_REQUEST)
      .do(console.log)
        .mergeMap(action =>
            ajax.getJSON('/login')
                .mapTo(userLoginSuccess())
                .catch(error => Observable.of(userLoginFailure(error)))
            );
