import { combineEpics } from 'redux-observable';
import {loginRequestEpic, loginSuccessEpic} from './login-epic';

export const rootEpic = combineEpics(
    loginRequestEpic, 
    loginSuccessEpic
);