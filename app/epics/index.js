import { combineEpics } from 'redux-observable';
import loginEpic from './login-epic';

export const rootEpic = combineEpics(
    loginEpic
);