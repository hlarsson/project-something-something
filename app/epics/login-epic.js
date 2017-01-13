import { USER_LOGIN_REQUEST } from '../actions/types'
import { userLoginSuccess } from '../actions/creators'
import 'rxjs/add/operator/mergeMap';
import ajax from 'rxjs/add/observable/dom/ajax';

export default action$ => 
    action$.ofType(USER_LOGIN_REQUEST)
        .mergeMap(action =>
            ajax.getJSON('http://localhost:3000/login')
                .map(response => userLoginSuccess));