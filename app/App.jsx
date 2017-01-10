import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-toolbox/lib/button';

class App extends Component {
  render() {
    return (
      <div>
       <h1>React is awesome!</h1>
        <Button label='Hello World!' />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
