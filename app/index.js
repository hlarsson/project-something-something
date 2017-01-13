import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configure-store'
import App from './App';
import Login from './containers/Login';
import Home from './containers/Home';
import './static/index.html';
import 'material-design-icons';
import WebFont from 'webfontloader';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const checkAuth = (nextState, routeReplace) => {
  if( !(nextState.user && nextState.user.authenticated) ){
    routeReplace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
  }
}

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>

      <Route path="/login" component={App}>
        <Route path="/" component={Login}/>
      </Route>
      
      <Route path="/" component={App} onEnter={checkAuth}>
        <Route path="home" component={Home}/>
      </Route>

    </Router>
  </Provider>,
  document.getElementById('app')
)