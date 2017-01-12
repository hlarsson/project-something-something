import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configure-store'
import App from './App';
import './static/index.html';
import 'material-design-icons';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

const store = configureStore()

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app')
);

