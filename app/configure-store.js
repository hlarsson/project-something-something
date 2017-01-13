import { createStore, applyMiddleware } from 'redux'
//import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

//const loggerMiddleware = createLogger()

export default function configureStore( /*preloadedState*/ ) {
  return createStore(
    rootReducer,
    //preloadedState,
    applyMiddleware(
        epicMiddleware
      //loggerMiddleware
    )
  )
}