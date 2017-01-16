import { createStore, applyMiddleware, compose } from 'redux'
//import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
const rootEpicCatch = rootEpic.catch(err => {
    console.log(err);
    throw err;
});
*/

const epicMiddleware = createEpicMiddleware(rootEpic);

//const loggerMiddleware = createLogger()

export default function configureStore( /*preloadedState*/ ) {
  return createStore(
    rootReducer,
    //preloadedState,
    composeEnhancers(
        applyMiddleware(
            epicMiddleware
        //loggerMiddleware
        )
    )
  )
}